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
from ..mongodb.models.request_quote import RequestQuoteDoc
from ..mongodb.utils.field_validator import FieldValidator
from ..mongodb.models.profile.user import UserDoc, AuthProfile, WorkProfile, PersonalProfile
from ..mongodb.models.workplace.inbox import InboxDoc


class FetchInbox(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None

        userIdentity = get_jwt_identity()
        messages = InboxDoc.objects(
            userId=userIdentity,
        )
        s = []
        for m in messages:
            t = None
            subject=None

            if m.category == 'quote':
                t = RequestQuoteDoc.objects(
                    id=m.documentId
                ).get()
                subject='Proposal for request (' + t.notes.requestId + ')'

            if t and subject:
                r = {
                    'subject': subject,
                    'category': m.category,
                    'date': t.updatedDate,
                    m.category: t
                }
                s.append(r)

        resp = jsonify(s)
        return_code = 200

        return make_response(resp, return_code)


routeMap = [
    {'res': FetchInbox, 'url': '/api/work-place/fetch-inbox'},
]
