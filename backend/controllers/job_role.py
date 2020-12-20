from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)

from ..mongodb.models.job_role import JobRoleDoc


class JobRoleFetchRoles(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        jobroles = JobRoleDoc.objects()
        resp = jsonify(
            jobroles
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': JobRoleFetchRoles, 'url': '/api/career-role/fetch-roles'},
]
