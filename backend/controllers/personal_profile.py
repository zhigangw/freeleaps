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


class UserProfileUpdateName(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'firstName', dest='firstName',
            type=str, location='json',
            required=True, help='The user\'s first name',
        )
        self.post_parser.add_argument(
            'lastName', dest='lastName',
            type=str, location='json',
            required=True, help='The user\'s last name',
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
            set__personalProfile__firstName=args.firstName,
            set__personalProfile__lastName=args.lastName
        )
        if(affected > 0):
            resp = jsonify(
                firstName=args.firstName,
                lastName=args.lastName
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


class UserProfileUpdateMobile(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'mobile', dest='mobile',
            type=str, location='json',
            required=True, help='The user\'s mobile',
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
            set__personalProfile__mobile=args.mobile,
        )
        if(affected > 0):
            resp = jsonify(
                mobile=args.mobile,
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


class UserProfileUpdateEmail(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
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
            set__personalProfile__email=args.email,
        )
        if(affected > 0):
            resp = jsonify(
                email=args.email,
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


class CheckUserExistanceByEmail(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    def post(self):
        resp = None
        args = self.post_parser.parse_args()
        return_code = 200

        email = args.email
        users = UserDoc.objects(personalProfile__email=email)

        userNameExists = False
        userExists = True if users.count() > 0 else False
        if userExists:
            userNameExists = users.first().authProfile.identity is not None

        resp = jsonify(
            userNameExists=userNameExists,
            userExists=userExists
        )
        return make_response(resp, return_code)


class UserProfileUpdatePhoto(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'photo',  dest='photo', type=str, location='json',
            required=True, help='The user\'s photo')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__personalProfile__photo=args.photo,
        )
        resp = jsonify(
            photo=args.photo
        )
        return_code = 200

        return make_response(resp, return_code)


class UserProfileUpdateLocation(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'location',  dest='location', type=str, location='json',
            required=True, help='The user\'s location')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__personalProfile__location=args.location,
        )
        resp = jsonify(
            location=args.location
        )
        return_code = 200

        return make_response(resp, return_code)


routeMap = [
    {'res': UserProfileUpdateLocation,
     'url': '/api/user-profile/update-location'},
    {'res': UserProfileUpdateName,
     'url': '/api/user-profile/update-name'},
    {'res': UserProfileUpdateMobile,
     'url': '/api/user-profile/update-mobile'},
    {'res': UserProfileUpdateEmail,
     'url': '/api/user-profile/update-email'},
    {'res': UserProfileUpdatePhoto,
     'url': '/api/user-profile/update-photo'},
    {'res': CheckUserExistanceByEmail,
     'url': '/api/user-profile/check-existance-by-email'},
]
