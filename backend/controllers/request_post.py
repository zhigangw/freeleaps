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
        userIdentity = get_jwt_identity()
        if(FieldValidator.is_valid_oid(args.requestId)):
            RequestPostDoc.objects(
                id=args.requestId,
                posterIdentity=userIdentity,
            ).update(
                set__posterIdentity=userIdentity,
                set__updatedDate=datetime.utcnow(),
                set__description__problemStatement=args.problemStatement,
                set__description__deliverables=args.deliverables,
                set__description__criteria=args.criteria,
            )
            resp = jsonify(
                requestId=str(args.requestId)
            )

        else:
            requestPost = RequestPostDoc(
                posterIdentity=userIdentity,
                status=RequestPostStatus.DRAFT,
                createdDate=datetime.utcnow(),
                updatedDate=datetime.utcnow(),
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
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            id=args.requestId,
            posterIdentity=userIdentity,
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
        userIdentity = get_jwt_identity()
        return_code = 200
        resp = None
        if(args.requestId):
            RequestPostDoc.objects(
                id=args.requestId,
                posterIdentity=userIdentity,
            ).update(
                set__updatedDate=datetime.utcnow(),
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
                posterIdentity=userIdentity,
                status=RequestPostStatus.DRAFT,
                createdDate=datetime.utcnow(),
                updatedDate=datetime.utcnow(),
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
        userIdentity = get_jwt_identity()
        querySet = RequestPostDoc.objects(
            posterIdentity=userIdentity,
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
                status = requestPost.status,
                description=requestPost.description,
                notes = requestPost.notes,
                publishedDate = requestPost.statueUpdatedDate
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
            posterIdentity=userIdentity,
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
            posterIdentity=userIdentity
        )
        s = []
        for q in querySet:
            r = {
                'requestId': str(q.id),
                'status': q.status,
                'createdDate': q.createdDate,
                'updatedDate': q.updatedDate,
                'statueUpdatedDate': q.statueUpdatedDate,
                'description': q.description
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
        querySet = RequestPostDoc.objects(
            status=RequestPostStatus.PUBLISHED
        )
        s = []
        for q in querySet:
            r = {
                'requestId': str(q.id),
                'status': q.status,
                'createdDate': q.createdDate,
                'updatedDate': q.updatedDate,
                'statueUpdatedDate': q.statueUpdatedDate,
                'description': q.description
            }
            s.append(r)

        resp = jsonify(s)
        return_code = 200
        return make_response(resp, return_code)
