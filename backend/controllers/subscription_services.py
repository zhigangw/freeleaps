from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)

from ..mongodb.models.service_plans import ServicePlansDoc


class SubscriptionFetchPlan(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        plans = ServicePlansDoc.objects()
        resp = jsonify(
            plans
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': SubscriptionFetchPlan,
     'url': '/api/subscription-services/fetch-plans'},
]
