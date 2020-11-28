from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.queryset.transform import update
from ..mongodb.models.request_post import RequestNotes
from ..mongodb.models.request_quote import RequestQuoteDoc
from ..mongodb.utils.validator import FieldValidator

import json


def notes(jnote):
    return RequestNotes.from_json(json.dumps(jnote))


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
            'notes',
            dest='notes',
            type=notes,
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

        RequestQuoteDoc.objects(
            requestId=args.requestId,
            providerIdentity=userIdentity,
        ).update(
            set__updatedDate=datetime.utcnow(),
            set__notes=args.notes,
            upsert=True
        )
        resp = jsonify(
            requestId=args.requestId
        )

        return make_response(resp, return_code)


class RequestQuoteMine(Resource):
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
        userIdentity = get_jwt_identity()
        return_code = 200
        resp = None

        quote = RequestQuoteDoc.objects(
            requestId=args.requestId,
            providerIdentity=userIdentity,
        ).first()
        
        resp = jsonify(quote)

        return make_response(resp, return_code)
