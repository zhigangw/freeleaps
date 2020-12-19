
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
from ..mongodb.models.user import UserDoc, AuthProfile
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
                package=args.package
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


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


class UserProfileUpdateJobRole(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'jobRole',  dest='jobRole', type=str, location='json',
            required=True, help='The user\'s jobRole')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__careerProfile__jobRole=args.jobRole,
        )
        resp = jsonify(
            jobRole=args.jobRole
        )
        return_code = 200

        return make_response(resp, return_code)


class UserProfileUpdateExperienceHeadline(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'headline',  dest='headline', type=str, location='json',
            required=True, help='The user\'s headline')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__careerProfile__experience__headline=args.headline,
        )
        resp = jsonify(
            headline=args.headline
        )
        return_code = 200

        return make_response(resp, return_code)


class UserProfileUpdateExperienceHighlight(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'highlight',  dest='highlight', type=str, location='json',
            required=True, help='The user\'s highlight')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__careerProfile__experience__highlight=args.highlight,
        )
        resp = jsonify(
            highlight=args.highlight
        )
        return_code = 200

        return make_response(resp, return_code)
