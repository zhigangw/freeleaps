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


def create_jwt_token(identity):
    access_token = create_access_token(identity=identity)
    expiresIn = datetime.utcnow() + timedelta(minutes=10)
    return access_token, expiresIn


def valid_email(email_str):
    """TODO: Add validation logic"""
    return True


def email(email_str):
    """Return email_str if valid, raise an exception in other case."""
    if valid_email(email_str):
        return email_str
    else:
        raise ValueError('{} is not a valid email'.format(email_str))


class UserSignup(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'email', dest='email',
            type=email, location='json',
            required=True, help='The user\'s email',
        )
        self.user_signup_post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )
        self.user_signup_post_parser.add_argument(
            'role', dest='role',
            type=int, location='json',
            default=1, choices=range(5), help='The user\'s role',
        )

    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'email', dest='email',
            type=email, location='json',
            required=True, help='The user\'s email',
        )
        self.user_signup_post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )
        self.user_signup_post_parser.add_argument(
            'role', dest='role',
            type=int, location='json',
            default=1, choices=range(5), help='The user\'s role',
        )

    def post(self):
        args = self.user_signup_post_parser.parse_args()
        identity = email = args.email
        user = UserDoc(identity,
                       password=hashlib.md5(
                           args.password.encode('utf-8')).hexdigest(),
                       role=args.role)
        user.save()

        access_token, expiresIn = create_jwt_token(identity=args.email)
        resp = jsonify(
            access_token=access_token,
            expiresIn=expiresIn,
            identity=identity)
        return make_response(resp, 200)


class UserSignin(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=email, location='json',
            required=True, help='The user\'s email',
        )
        self.post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.post_parser.parse_args()
        identity = email = args.email
        user = UserDoc.objects(email=identity,
                               password=hashlib.md5(
                                   args.password.encode('utf-8')).hexdigest()
                               ).first()
        access_token, expiresIn = create_jwt_token(identity=identity)
        resp = jsonify(
            access_token=access_token,
            expiresIn=expiresIn,
            identity=identity,
            role=user.role)
        return make_response(resp, 200)


class UserSignout(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'identity', dest='identity',
            type=email, location='json',
            required=True, help='The user\'s identity',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        identity = args.identity
        user = UserDoc.objects(email=identity).first()
        resp = jsonify(
            identity=identity,
            user=user)
        return make_response(resp, 200)
