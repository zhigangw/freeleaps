from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, request, make_response

from flask_restful import Api, Resource, url_for, fields, marshal_with, reqparse
from flask_jwt_extended import (
    jwt_required, create_access_token,
    get_jwt_identity
)

from ..mongodb.models.user import UserDoc


def valid_email(email_str):
    """TODO: Add validation logic"""
    return True


def email(email_str):
    """Return email_str if valid, raise an exception in other case."""
    if valid_email(email_str):
        return email_str
    else:
        raise ValueError('{} is not a valid email'.format(email_str))


user_signup_post_parser = reqparse.RequestParser()
user_signup_post_parser.add_argument(
    'email', dest='email',
    type=email, location='json',
    required=True, help='The user\'s email',
)
user_signup_post_parser.add_argument(
    'password', dest='password',
    location='json', required=True,
    help='The user\'s password',
)
user_signup_post_parser.add_argument(
    'role', dest='role',
    type=int, location='json',
    default=1, choices=range(5), help='The user\'s role',
)

class UserSignup(Resource):
    def post(self):
        args = user_signup_post_parser.parse_args()
        user = UserDoc(email=args.email,
                       password=hashlib.md5(
                           args.password.encode('utf-8')).hexdigest(),
                       role=args.role)
        user.save()
        # Identity can be any data that is json serializable
        access_token = create_access_token(identity=args.email)
        identity = args.email
        expiresIn = datetime.utcnow() + timedelta(minutes=30)
        print(access_token)
        resp =  jsonify(
            access_token=access_token,
            expiresIn=expiresIn,
            identity=identity)
        return make_response(resp, 200)


class UserSignin(Resource):
    def post(self):
        user = UserDoc.objects(name="Zhigang Wang")
        print(user)
        return jsonify(user)


class UserSignout(Resource):
    def post(self):
        UserDoc.objects(name="Zhigang Wang").delete()
        return jsonify(text='Hello, logout:')
