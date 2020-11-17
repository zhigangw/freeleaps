from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, request

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
    type=email, location='form',
    required=True, help='The user\'s email',
)
user_signup_post_parser.add_argument(
    'password', dest='password',
    location='form', required=True,
    help='The user\'s password',
)
user_signup_post_parser.add_argument(
    'role', dest='role',
    type=int, location='form',
    default=1, choices=range(5), help='The user\'s role',
)

user_fields = {
    'username': fields.String,
    'email': fields.String,
    'password': fields.String,
}

class UserSignup(Resource):
    @marshal_with(user_fields)
    def post(self):
        args = user_signup_post_parser.parse_args()
        user = UserDoc(email=args.email,
                       password=hashlib.md5(args.password),
                       role=args.role)
        user.save()
        # Identity can be any data that is json serializable
        access_token = create_access_token(identity=args.email)
        return jsonify(access_token=access_token), 200


class UserSignin(Resource):
    def post(self):
        user = UserDoc.objects(name="Zhigang Wang")
        return jsonify(user)


class UserSignout(Resource):
    def post(self):
        UserDoc.objects(name="Zhigang Wang").delete()
        return jsonify(text='Hello, logout:')
