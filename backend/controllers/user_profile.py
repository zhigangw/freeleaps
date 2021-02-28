
from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from werkzeug.utils import secure_filename
from mongoengine.queryset.transform import update
from ..mongodb.models.profile.user import UserDoc, AuthProfile
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.utils.field_validator import FieldValidator
import werkzeug


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
            user.authProfile
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


class UserProfileFetchPersonal(Resource):
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
            user.personalProfile
        )

        return make_response(resp, return_code)


class UserProfileFetchCareer(Resource):
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
            user.careerProfile
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': UserProfileFetchSettings,
     'url': '/api/user-profile/fetch-settings'},
    {'res': UserProfileFetchAccount,
     'url': '/api/user-profile/fetch-account'},
    {'res': UserProfileFetchWork,
     'url': '/api/user-profile/fetch-work'},
    {'res': UserProfileFetchPersonal,
     'url': '/api/user-profile/fetch-personal'},
    {'res': UserProfileFetchCareer,
     'url': '/api/user-profile/fetch-career'},

]
