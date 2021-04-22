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


class UpdateWage(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'wage',  dest='wage', type=FieldValidator.wage, location='json',
            required=True, help='The user\'s wage')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__careerProfile__wage=args.wage,
        )
        resp = jsonify(
            args.wage
        )
        return_code = 200

        return make_response(resp, return_code)


class UpdateJobRole(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'jobRole',  dest='jobRole', type=FieldValidator.stringList, location='json',
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
            set__careerProfile__preferredRoles=args.jobRole,
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
            'period',  dest='period', type=ExperiencePeriod.from_dic, location='json',
            required=True, help='The user\'s period')

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        args.period.modifiedDate = datetime.utcnow
        added = UserDoc.objects(
            id=userIdentity,
            careerProfile__experience__periods__oid__ne=args.period.oid

        ).update_one(
            add_to_set__careerProfile__experience__periods=args.period
        )

        if added > 0:
            resp = jsonify(
                period=args.period
            )
            return make_response(resp, return_code)

        updated = UserDoc.objects(
            id=userIdentity,
            careerProfile__experience__periods__oid=args.period.oid
        ).update_one(
            set__careerProfile__experience__periods__S=args.period,
            upsert=True
        )

        if updated > 0:
            resp = jsonify(
                period=args.period
            )
            return make_response(resp, return_code)

        resp = jsonify(text="nothing updated")
        return_code = 404

        return make_response(resp, return_code)


baseUrl = '/api/career-profile/'
routeMap = [
    {'res': UpdateWage,
     'url': baseUrl+'update/wage'},
    {'res': UpdateJobRole,
     'url': baseUrl+'update/job-role'},
    {'res': UpdateHeadline,
     'url': baseUrl+'update/headline'},
    {'res': UpdateHighlight,
     'url': baseUrl+'update/highlight'},
    {'res': UpdatePeriod,
     'url': baseUrl+'update/period'},
]
