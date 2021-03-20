from functools import wraps
from datetime import date, datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from werkzeug.utils import secure_filename
from mongoengine.queryset.transform import update
from ..mongodb.models.profile.user import UserDoc, AuthProfile
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.utils.field_validator import FieldValidator
from ..mongodb.models.service_plans import ServicePlansDoc
from ..mongodb.models.profile.work.service_subscription import ServiceSubscription


class UserProfileChoosePackage(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'plan_id', dest='plan_id',
            type=str, location='json',
            required=True, help='The user\'s plan_id',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None

        plan = ServicePlansDoc.objects(
            id=args.plan_id,
        ).first()

        if not plan:
            return_code = 404
            resp = jsonify(
                text="plan not exists."
            )
            return make_response(resp, return_code)

        userIdentity = get_jwt_identity()

        affected = UserDoc.objects(
            id=userIdentity,
        ).update(
            set__workProfile__package=ServiceSubscription(
                plan_id=plan.id,
            )
        )

        if(affected > 0):
            resp = jsonify(
                plan_id=str(plan.id),
            )
        else:
            resp = jsonify(
                text="failed(non exist user)."
            )
            return_code = 404

        return make_response(resp, return_code)


routeMap = [
    {'res': UserProfileChoosePackage,
     'url': '/api/user-work/choose-package'},

]
