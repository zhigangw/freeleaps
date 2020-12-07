from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from mongoengine.fields import ImproperlyConfigured
from mongoengine.queryset.transform import update
from ..mongodb.models.user import UserDoc
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.utils.field_validator import FieldValidator


class SellerProfileSaveRequest(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'requestId',
            dest='requestId',
            type=FieldValidator.objectid,
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

        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__sellerProfile__S__savedRequest=args.requestId
        )
        resp = jsonify(
            requestId=str(args.requestId)
        )

        return make_response(resp, return_code)


class SellerProfileFetchSavedRequests(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        user = UserDoc.objects(
            id=userIdentity,
        ).first()

        if(user == None):
            resp = jsonify(
                text="user with the give credential not exists"
            )
            return_code = 404
            return make_response(resp, return_code)

        if(user.sellerProfile == None
           or
           len(user.sellerProfile.savedRequests) == 0
           ):
            resp = jsonify([])
            return make_response(resp, return_code)

        requestIds = user.sellerProfile.savedRequests
        requests = RequestPostDoc.objects(
            id in requestIds
        )
        resp = jsonify(requests)

        return make_response(resp, return_code)
