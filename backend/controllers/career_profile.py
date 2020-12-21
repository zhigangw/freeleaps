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
from ..mongodb.models.profile.user import UserDoc
from ..mongodb.models.profile.career.experience_period import ExperiencePeriod
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.utils.field_validator import FieldValidator


class UpdateJobRole(Resource):
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


class UpdateHeadline(Resource):
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


class UpdateHighlight(Resource):
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


class UpdatePeriod(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'id',  dest='id', type=str, location='json',
            required=True, help='The user\'s period id')
        self.post_parser.add_argument(
            'period',  dest='period', type=ExperiencePeriod.from_dic, location='json',
            required=True, help='The user\'s period')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        updated = UserDoc.objects(
            id=userIdentity,
            careerProfile__experience__periods__id=args.id
        ).update_one(
            set__careerProfile__experience__periods__S=args.period,
        )

        if updated is not None:
            resp = jsonify(
                period=updated
            )
        else:
            resp = jsonify(text="nothing updated")
            return_code = 404

        return make_response(resp, return_code)


class AddPeriod(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'period',  dest='period', type=ExperiencePeriod.from_dic, location='json',
            required=True, help='The user\'s period')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        updated = UserDoc.objects(
            id=userIdentity,
        ).update_one(
            push__careerProfile__experience__periods=args.period
        )
        if updated > 0 :
            resp = jsonify(
                period=args.period
            )
        else:
            resp = jsonify(text="nothing updated")
            return_code = 404

        return make_response(resp, return_code)


baseUrl = '/api/career-profile/'
routeMap = [
    {'res': UpdateJobRole,
     'url': baseUrl+'update/job-role'},
    {'res': UpdateHeadline,
     'url': baseUrl+'update/headline'},
    {'res': UpdateHighlight,
     'url': baseUrl+'update/highlight'},
    {'res': UpdatePeriod,
     'url': baseUrl+'update/period'},
    {'res': AddPeriod,
     'url': baseUrl+'add/period'},
]
