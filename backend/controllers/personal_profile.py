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
    {'res': UserProfileUpdatePhoto,
     'url': '/api/user-profile/update-photo'},
]
