from functools import wraps
from datetime import date, datetime, timedelta
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.models.project_manage import ProjectDoc, TrackStatus, PayStatus
from ..mongodb.utils.field_validator import FieldValidator
from mongoengine.queryset.visitor import Q


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


class ProjectManagerUpdateStatus(Resource):
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
            'status',
            dest='status',
            type=int,
            location='json',
            required=True,
            help='The project\'s status',
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
            & Q(id=args.projectId)
        ).update(set__status=args.status)

        resp = jsonify(
        )

        return make_response(resp, return_code)


class ProjectManagerUpdateStart(Resource):
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
            'start',
            dest='start',
            type=datetime.fromisoformat,
            location='json',
            required=True,
            help='The project\'s start',
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
            & Q(id=args.projectId)
        ).update(set__trackStatus__kickoffDate=args.start)

        resp = jsonify(
        )

        return make_response(resp, return_code)


class ProjectManagerUpdateDue(Resource):
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
            'due',
            dest='due',
            type=datetime.fromisoformat,
            location='json',
            required=True,
            help='The project\'s due',
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
            & Q(id=args.projectId)
        ).update(set__trackStatus__dueDate=args.due)

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
    {'res': ProjectManagerUpdateDue,
     'url': '/api/project-manage/update-due'},
    {'res': ProjectManagerUpdateStart,
     'url': '/api/project-manage/update-start'},
    {'res': ProjectManagerUpdateStatus,
     'url': '/api/project-manage/update-status'},
    {'res': ProjectManagerUpdatePayStatus,
     'url': '/api/project-manage/update-pay-status'},
    {'res': ProjectManageFetchForPoster,
     'url': '/api/project-manage/fetch-for-poster'},
    {'res': ProjectManageFetchForProvider,
     'url': '/api/project-manage/fetch-for-provider'},
    {'res': ProjectManageFetchForRequest,
     'url': '/api/project-manage/fetch-for-request'},
]
