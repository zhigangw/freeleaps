from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.types.request_post import RequestPostStatus
from ..mongodb.models.request_post import RequestPostDoc, RequestDescription, RequestNotes
from ..mongodb.utils.validator import FieldValidator


class RequestQuoteSubmit(Resource):
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
        userIdentity = get_jwt_identity()
        return_code = 200
        resp = None

        RequestPostDoc.objects(
            requestId=args.requestId,
            providerIdentity=userIdentity,
        ).update(
            set__updatedDate=datetime.utcnow(),
            set__notes__totalBudget=args.totalBudget,
            set__notes__currency=args.currency,
            set__notes__escortedDeposit=args.escortedDeposit,
            set__notes__estimatedHours=args.estimatedHours,
            set__notes__qualification=args.qualification,
            set__notes__notes=args.notes,
            upsert= True
        )
        resp = jsonify(
            requestId=args.requestId
        )

        return make_response(resp, return_code)
