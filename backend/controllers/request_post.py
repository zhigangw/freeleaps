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
from ..mongodb.utils.field_validator import FieldValidator
from ..mongodb.models.profile.user import UserDoc, AuthProfile, WorkProfile, PersonalProfile

class RequestPostFillDescription(Resource):
    def __init__(self) -> None:
        self.post_parser=reqparse.RequestParser()
        self.post_parser.add_argument(
            'requestId',
            dest = 'requestId',
            type = FieldValidator.objectid,
            location = 'json',
            required = False,
            help = 'The request post\'s requestId',
        )
        self.post_parser.add_argument(
            'description',
            dest='description',
            type=FieldValidator.description,
            location='json',
            required=True,
            help='The request post\'s description',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        if(FieldValidator.is_valid_oid(args.requestId)):
            RequestPostDoc.objects(
                id=args.requestId,
                posterId=userIdentity,
            ).update(
                set__updatedDate=datetime.utcnow(),
                set__description=args.description,
            )
            resp = jsonify(
                requestId=str(args.requestId)
            )

        else:
            requestPost = RequestPostDoc(
                posterId=userIdentity,
                status=RequestPostStatus.DRAFT,
                createdDate=datetime.utcnow(),
                updatedDate=datetime.utcnow(),
                description=args.description
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
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            id=args.requestId,
            posterId=userIdentity,
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
        RequestPostDoc.objects(
            id=args.requestId,
            posterId=userIdentity,
        ).update(
            set__updatedDate=datetime.utcnow(),
            set__notes=args.notes,
            upsert=True
        )
        resp = jsonify(
            requestId=args.requestId
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
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            posterId=userIdentity,
            id=args.requestId
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


class RequestPostFetchWhole(Resource):
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
                requestId=str(requestPost.id),
                status=requestPost.status,
                description=requestPost.description,
                notes=requestPost.notes,
                publishedDate=requestPost.statueUpdatedDate
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
        userIdentity = get_jwt_identity()
        updatedDoc = RequestPostDoc.objects(
            posterId=userIdentity,
            id=args.requestId
        ).update(
            set__status=args.status,
            set__updatedDate=datetime.utcnow(),
            set__statueUpdatedDate=datetime.utcnow(),
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


class RequestPostFetchMyAllAsSummary(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            posterId=userIdentity
        )
        s = []
        for q in querySet:
            r = {
                'requestId': str(q.id),
                'status': q.status,
                'createdDate': q.createdDate,
                'updatedDate': q.updatedDate,
                'statueUpdatedDate': q.statueUpdatedDate,
                'description': q.description,
                'quoteCount':len(q.quotes),
                }
            s.append(r)

        resp = jsonify(s)
        return_code = 200
        return make_response(resp, return_code)


class RequestPostFetchAllPublishedAsSummary(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            status=RequestPostStatus.PUBLISHED,
            posterId__ne=userIdentity
        )
        s = []
        for q in querySet:
            user = UserDoc.objects(
                id=q.posterId
            ).first()
            td = datetime.now() - q.statueUpdatedDate
            r = {
                'requestId': str(q.id),
                'status': q.status,
                'createdDate': q.createdDate,
                'updatedDate': q.updatedDate,
                'statueUpdatedDate': q.statueUpdatedDate,
                'postedTimeDelta': td.days * 24 + int(td.seconds / 3600),
                'description': q.description,
                'notes': q.notes,
                'poster':{
                    "personal":user.personalProfile,
                    "work":user.workProfile,
                }
            }
            s.append(r)

        resp = jsonify(s)
        return_code = 200
        return make_response(resp, return_code)


routeMap = [
    {'res': RequestPostFillDescription,
     'url': '/api/request-post/fill-description'},
    {'res': RequestPostFetchDescription,
     'url': '/api/request-post/fetch-description'},
    {'res': RequestPostFillNotes, 'url': '/api/request-post/fill-note'},
    {'res': RequestPostFetchNotes, 'url': '/api/request-post/fetch-notes'},
    {'res': RequestPostFillStatus, 'url': '/api/request-post/fill-status'},
    {'res': RequestPostFetchMyAllAsSummary,
     'url': '/api/request-post/mine-summary'},
    {'res': RequestPostFetchAllPublishedAsSummary,
     'url': '/api/request-post/published-summary'},
    {'res': RequestPostFetchWhole, 'url': '/api/request-post/fetch-whole'},

]
