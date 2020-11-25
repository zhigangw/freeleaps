from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, create_access_token
)
from mongoengine import queryset
from ..mongodb.models.request import RequestPostDoc, RequestDescription, RequestNotes


class RequestPostFillDescription(Resource):
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

    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        if(args.requestId):
            RequestPostDoc.objects(
                _id=args.requestId
            ).update(
                set__description__S_problemStatement=args.problemStatement,
                set__description__S_deliverables=args.deliverables,
                set__description__S_criteria=args.criteria,
            )
            resp = jsonify(
                requestId=args.requestId
            )

        else:
            requestPost = RequestPostDoc(description=RequestDescription(
                problemStatement=args.problemStatement,
                deliverables=args.deliverables,
                criteria=args.criteria)
            ).save()
            resp = jsonify(
                requestId=requestPost.requestId
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

    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        if(args.requestId):
            RequestPostDoc.objects(
                _id=args.requestId
            ).update(
                set__notes__S_totalBudget=args.totalBudget,
                set__notes__S_currency=args.currency,
                set__notes__S_escortedDeposit=args.escortedDeposit,
                set__notes__S_estimatedHours=args.estimatedHours,
                set__notes__S_qualification=args.qualification,
                set__notes__S_notes=args.notes,
            )
            resp = jsonify(
                requestId=args.requestId
            )

        else:
            requestPost = RequestPostDoc(notes=RequestNotes(
                problemStatement=args.problemStatement,
                deliverables=args.deliverables,
                criteria=args.criteria)
            ).save()
            resp = jsonify(
                requestId=requestPost.requestId
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
                requestId=requestPost.requestId,
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


    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        querySet = RequestPostDoc.objects(
            _id=args.requestId
        ).update(
            status=args.status
            )
        if(querySet.count() > 0):
            requestPost = querySet.first()
            resp = jsonify(
                requestId=requestPost.requestId,
                status=requestPost.status
            )
            return_code = 200
        else:
            resp = jsonify(
                text='not found the post specified by requestId'
            )
            return_code = 404
        return make_response(resp, return_code)


