from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, create_access_token
)

from ..mongodb.models.request_post import RequestPostDoc, RequestDescription, RequestNotes
from ..mongodb.utils.validator import FieldValidator


class RequestPostFillDescription(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'requestId',
            dest='requestId',
            type=FieldValidator.objectid,
            location='json',
            required=False,
            help='The request post\'s requestId',
        )
        self.post_parser.add_argument(
            'problemStatement',
            dest='problemStatement',
            type=str,
            location='json',
            required=True,
            help='The request post\'s description',
        )
        self.post_parser.add_argument(
            'deliverables',
            dest='deliverables',
            type=str,
            location='json',
            required=True,
            help='The request post\'s deliverables',
        )
        self.post_parser.add_argument(
            'criteria',
            dest='criteria',
            type=str,
            location='json',
            required=True,
            help='The request post\'s criteria',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        if(FieldValidator.is_valid_oid(args.requestId)):
            RequestPostDoc.objects(
                id=args.requestId
            ).update(
                set__description__S_problemStatement=args.problemStatement,
                set__description__S_deliverables=args.deliverables,
                set__description__S_criteria=args.criteria,
            )
            resp = jsonify(
                requestId=args.requestId
            )

        else:
            requestPost = RequestPostDoc(
                description=RequestDescription(
                    problemStatement=args.problemStatement,
                    deliverables=args.deliverables,
                    criteria=args.criteria)
            ).save()
            resp = jsonify(
                requestId=str(requestPost.id)
            )

        return make_response(resp, return_code)


class RequestPostFetchDescription(Resource):
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
        querySet = RequestPostDoc.objects(
            id=args.requestId
        )
        if(querySet.count() > 0):
            requestPost = querySet.first()
            resp = jsonify(
                requestId=requestPost.requestId,
                description=requestPost.description
            )
            return_code = 200
        else:
            resp = jsonify(
                text='not found the post specified by requestId'
            )
            return_code = 404
        return make_response(resp, return_code)


class RequestPostFillNotes(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'requestId',
            dest='requestId',
            type=str,
            location='json',
            required=False,
            help='The request post\'s requestId',
        )
        self.post_parser.add_argument(
            'totalBudget',
            dest='totalBudget',
            type=int,
            location='json',
            required=True,
            help='The request post\'s totalBudget',
        )
        self.post_parser.add_argument(
            'currency',
            dest='currency',
            type=str,
            location='json',
            required=True,
            help='The request post\'s currency',
        )
        self.post_parser.add_argument(
            'escortedDeposit',
            dest='escortedDeposit',
            type=int,
            location='json',
            required=True,
            help='The request post\'s escortedDeposit',
        )
        self.post_parser.add_argument(
            'estimatedHours',
            dest='estimatedHours',
            type=int,
            location='json',
            required=True,
            help='The request post\'s estimatedHours',
        )
        self.post_parser.add_argument(
            'qualification',
            dest='qualification',
            type=str,
            location='json',
            required=True,
            help='The request post\'s qualification',
        )
        self.post_parser.add_argument(
            'notes',
            dest='notes',
            type=str,
            location='json',
            required=True,
            help='The request post\'s notes',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        if(args.requestId):
            RequestPostDoc.objects(
                id=args.requestId
            ).update(
                set__notes__totalBudget=args.totalBudget,
                set__notes__currency=args.currency,
                set__notes__escortedDeposit=args.escortedDeposit,
                set__notes__estimatedHours=args.estimatedHours,
                set__notes__qualification=args.qualification,
                set__notes__notes=args.notes
            )
            resp = jsonify(
                requestId=args.requestId
            )

        else:
            requestPost = RequestPostDoc(
                notes=RequestNotes(
                totalBudget=args.totalBudget,
                currency=args.currency,
                escortedDeposit=args.escortedDeposit,
                estimatedHours=args.estimatedHours,
                qualification=args.qualification,
                notes=args.notes
                )
            ).save()
            resp = jsonify(
                requestId=str(requestPost.id)
            )

        return make_response(resp, return_code)


class RequestPostFetchNotes(Resource):
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
        querySet = RequestPostDoc.objects(
            _id=args.requestId
        )
        if(querySet.count() > 0):
            requestPost = querySet.first()
            resp = jsonify(
                requestId=str(requestPost.id),
                notes=requestPost.notes
            )
            return_code = 200
        else:
            resp = jsonify(
                text='not found the post specified by requestId'
            )
            return_code = 404
        return make_response(resp, return_code)


class RequestPostFillStatus(Resource):
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
        self.post_parser.add_argument(
            'status',
            dest='status',
            type=int,
            location='json',
            required=True,
            help='The request post\'s requestId',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        updatedDoc = RequestPostDoc.objects(
            id=args.requestId
        ).update(
            status=args.status
        )
        if(updatedDoc > 0):
            resp = jsonify(
                requestId=str(args.requestId),
                status=args.status
            )
            return_code = 200
        else:
            resp = jsonify(
                text='not found the post specified by requestId'
            )
            return_code = 404
        return make_response(resp, return_code)
