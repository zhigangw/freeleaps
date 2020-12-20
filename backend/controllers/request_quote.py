from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.base import utils
from mongoengine.queryset.transform import update
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.models.request_notes import RequestNotes

from ..mongodb.models.request_quote import RequestQuoteDoc
from ..mongodb.models.project_manage import WorkSite, Contract, ProjectDoc
from ..mongodb.types.request_post import RequestPostStatus
from ..mongodb.types.request_qoute import RequestQuoteStatus
from ..mongodb.utils.field_validator import FieldValidator


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
            type=FieldValidator.notes,
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
            providerId=userIdentity,
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
            providerId=userIdentity,
        ).first()

        resp = jsonify(quote)

        return make_response(resp, return_code)


class RequestQuoteFetchQuotes(Resource):
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

        quotes = RequestQuoteDoc.objects(
            requestId=args.requestId,
        )

        resp = jsonify(quotes)

        return make_response(resp, return_code)


class RequestQuoteFetchOpen(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        userIdentity = get_jwt_identity()
        return_code = 200
        resp = None

        quotes = RequestQuoteDoc.objects(
            providerId=userIdentity,
            status__ne=RequestQuoteStatus.ACCEPTED
        )

        resp = jsonify(quotes)

        return make_response(resp, return_code)


class RequestQuoteAcceptQuote(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'quoteId',
            dest='quoteId',
            type=str,
            location='json',
            required=True,
            help='The request post\'s quoteId',
        )
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
            id=args.quoteId,
        ).first()

        if(quote == None):
            resp = jsonify(text="quote with the quoteId does not exist")
            return_code = 403
            return make_response(resp, return_code)

        request = RequestPostDoc.objects(
            id=args.requestId
        ).first()
        if(request == None):
            resp = jsonify(text="request with the requestId does not exist")
            return_code = 403
            return make_response(resp, return_code)

        if ProjectDoc.objects(
            contract__requestId=args.requestId,
            contract__quoteId=args.quoteId,
        ).count() > 0:
            resp = jsonify(text="project with the requestId and quoteId exist")
            return_code = 403
            return make_response(resp, return_code)

        request.status = RequestPostStatus.ONGOING
        request.updatedDate = datetime.utcnow()
        request.statueUpdatedDate = datetime.utcnow()
        request.save()

        quote.status = RequestQuoteStatus.ACCEPTED
        quote.updatedDate = datetime.utcnow()
        quote.save()

        project = ProjectDoc(
            createdDate=datetime.utcnow(),
            updatedDate=datetime.utcnow(),
            contract=Contract(
                requestId=args.requestId,
                quoteId=args.quoteId,
                posterId=request.posterId,
                providerId=quote.providerId,
                notes=quote.notes
            ),
            workSite=WorkSite(
                teamSite="to_be_done",
                gitSite="to_be_done",
            )
        )
        project.save()

        resp = jsonify(projectId=str(project.id))

        return make_response(resp, return_code)


routeMap = [
    {'res': RequestQuoteSubmit, 'url': '/api/request-quote/submit-quote'},
    {'res': RequestQuoteMine, 'url': '/api/request-quote/fetch-mine'},
    {'res': RequestQuoteFetchQuotes,
     'url': '/api/request-quote/fetch-quotes'},
    {'res': RequestQuoteAcceptQuote,
     'url': '/api/request-quote/accept-quote'},
    {'res': RequestQuoteFetchOpen,
     'url': '/api/request-quote/fetch-open'},
]
