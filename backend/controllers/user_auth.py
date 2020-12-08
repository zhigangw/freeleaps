from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, create_access_token, get_jwt_identity
)
from ..mongodb.models.user import UserDoc, AuthProfile


def create_jwt_token(identity):
    access_token = create_access_token(identity=identity)
    expiresIn = datetime.utcnow() + timedelta(minutes=10)
    return access_token, expiresIn


class UserSignup(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'username', dest='username',
            type=str, location='json',
            required=True, help='The user\'s username',
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
        return_code = 200
        resp = None

        if(UserDoc.objects(authProfile__identity=args.username).count() > 0):
            resp = jsonify(text="uesr exists")
            return_code = 401
        else:
            user = UserDoc(authProfile=AuthProfile(
                identity=args.username,
                password=hashlib.md5(
                    args.password.encode('utf-8')).hexdigest(),
                role=args.role)
            )
            user.save()

            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=args.username,
                expiresIn=expiresIn,
                role=user.authProfile.role)
        return make_response(resp, return_code)


class UserSignin(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'username', dest='username',
            type=str, location='json',
            required=True, help='The user\'s username',
        )
        self.post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.post_parser.parse_args()
        identity = args.username
        queryset = UserDoc.objects(authProfile__identity=identity,
                                   authProfile__password=hashlib.md5(
                                       args.password.encode('utf-8')).hexdigest()
                                   )
        return_code = 200
        resp = None
        if(queryset.count() == 0):
            resp = jsonify(text="user doesn't exist")
            return_code = 401
        else:
            user = queryset.first()
            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=identity,
                expiresIn=expiresIn,
                role=user.authProfile.role)
        return make_response(resp, return_code)


class UserSignout(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        user = UserDoc.objects(id=identity).first()
        resp = None
        return_code = 200
        if user != None:
            resp = jsonify(
                identity=identity)
        else:
            resp = jsonify(text="invalid user token. user not exists")
            return_code = 404
        return make_response(resp, return_code)


class UserIsNameAvailable(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'identity', dest='identity',
            type=str, location='json',
            required=True, help='The user\'s identity',
        )

    def post(self):
        args = self.post_parser.parse_args()
        identity = args.identity

        available = False if UserDoc.objects(
            authProfile__identity=identity).count() > 0 else True
        resp = jsonify(
            available=available
        )
        return make_response(resp, 200)


class UserUpdateUsername(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'identity', dest='identity',
            type=str, location='json',
            required=True, help='The user\'s identity',
        )

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        resp = None
        args = self.post_parser.parse_args()
        username = args.identity
        return_code = 200

        available = False if UserDoc.objects(
            authProfile__identity=username).count() > 0 else True
        if(not available):
            resp = jsonify(
                text="username is not available any more"
            )
            return_code = 403
            return make_response(resp, return_code)

        UserDoc.objects(
            id=identity
        ).update(
            set__authProfile__identity=username
        )
        resp = jsonify(
            identity=username,
        )

        return make_response(resp, return_code)


class UserUpdatePassword(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'password', dest='password',
            type=str, location='json',
            required=True, help='The user\'s password',
        )

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        resp = None
        args = self.post_parser.parse_args()
        return_code = 200

        UserDoc.objects(
            id=identity
        ).update(
            authProfile__password=hashlib.md5(
                args.password.encode('utf-8')).hexdigest()
        )
        resp = jsonify(
            text="password is updated",
        )

        return make_response(resp, return_code)
