
from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.models.user import UserDoc, AuthProfile
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.utils.field_validator import FieldValidator


class UserProfileFetchSettings(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        user = UserDoc.objects(
            id=userIdentity,
        ).first()

        if(user == None):
            resp = jsonify(
                text="user with the give credential not exists"
            )
            return_code = 404
            return make_response(resp, return_code)

        resp = jsonify(
            account=AuthProfile(
                identity=user.authProfile.identity,
                role=user.authProfile.role
            ),
            work=user.workProfile,
            personal=user.personalProfile,
            career=user.careerProfile
        )

        return make_response(resp, return_code)


class UserProfileFetchAccount(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        user = UserDoc.objects(
            id=userIdentity,
        ).first()

        if(user == None):
            resp = jsonify(
                text="user with the give credential not exists"
            )
            return_code = 404
            return make_response(resp, return_code)

        resp = jsonify(
            identity=user.authProfile.identity,
            role=user.authProfile.role
        )

        return make_response(resp, return_code)


class UserProfileFetchWork(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        user = UserDoc.objects(
            id=userIdentity,
        ).first()

        if(user == None):
            resp = jsonify(
                text="user with the give credential not exists"
            )
            return_code = 404
            return make_response(resp, return_code)

        resp = jsonify(
            user.workProfile
        )

        return make_response(resp, return_code)


class UserProfileChoosePackage(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'package', dest='package',
            type=int, location='json',
            required=True, help='The user\'s package',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        affected = UserDoc.objects(
            id=userIdentity,
        ).update(
            set__workProfile__package=args.package
        )
        if(affected > 0):
            resp = jsonify(
                text="succeeded."
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)
