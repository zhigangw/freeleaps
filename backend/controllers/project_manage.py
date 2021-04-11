from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.models.project_manage import ProjectDoc
from ..mongodb.utils.field_validator import FieldValidator


class ProjectManageFetchForProvider(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        projects = ProjectDoc.objects(
            contract__providerId=userIdentity,
        )
        resp = jsonify(
            projects
        )

        return make_response(resp, return_code)


class ProjectManageFetchForRequest(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'requestId',
            dest='requestId',
            type=str,
            location='json',
            required=True,
            help='The request post\'s requestId',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        project = ProjectDoc.objects(
            contract__providerId=userIdentity,
            contract__requestId=args.requestId,
        ).first()
        resp = jsonify(
            project
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': ProjectManageFetchForProvider,
     'url': '/api/project-manage/fetch-for-provider'},
    {'res': ProjectManageFetchForRequest,
     'url': '/api/project-manage/fetch-for-request'},
]
