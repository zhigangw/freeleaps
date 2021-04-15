from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.models.project_manage import ProjectDoc, TrackStatus, PayStatus
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


class ProjectManageFetchForPoster(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        projects = ProjectDoc.objects(
            contract__posterId=userIdentity,
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


class ProjectManagerUpdateTrackStatus(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'projectId',
            dest='projectId',
            type=str,
            location='json',
            required=True,
            help='The project\'s projectId',
        )
        self.post_parser.add_argument(
            'trackStatus',
            dest='trackStatus',
            type=FieldValidator.trackStatus,
            location='json',
            required=True,
            help='The project\'s trackStatus',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        ProjectDoc.objects(
            (Q(contract__providerId=userIdentity)
             | Q(contract__posterId=userIdentity))
            & Q(id=args.requestId)
        ).update(set__trackStatus=args.trackStatus)

        resp = jsonify(
        )

        return make_response(resp, return_code)


class ProjectManagerUpdatePayStatus(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'projectId',
            dest='projectId',
            type=str,
            location='json',
            required=True,
            help='The project\'s projectId',
        )
        self.post_parser.add_argument(
            'payStatus',
            dest='payStatus',
            type=FieldValidator.payStatus,
            location='json',
            required=True,
            help='The project\'s payStatus',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        ProjectDoc.objects(
            (Q(contract__providerId=userIdentity)
             | Q(contract__posterId=userIdentity))
            & Q(id=args.requestId)
        ).update(set__payStatus=args.payStatus)

        resp = jsonify(
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': ProjectManagerUpdatePayStatus,
     'url': '/api/project-manage/update-pay-status'},
    {'res': ProjectManagerUpdateTrackStatus,
     'url': '/api/project-manage/update-track-status'},
    {'res': ProjectManageFetchForPoster,
     'url': '/api/project-manage/fetch-for-poster'},
    {'res': ProjectManageFetchForProvider,
     'url': '/api/project-manage/fetch-for-provider'},
    {'res': ProjectManageFetchForRequest,
     'url': '/api/project-manage/fetch-for-request'},
]
