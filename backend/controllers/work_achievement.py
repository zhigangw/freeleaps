
from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)
from werkzeug.utils import secure_filename
from mongoengine.queryset.transform import update
from ..mongodb.models.profile.user import UserDoc, AuthProfile
from ..mongodb.models.service_plans import ServicePlansDoc
from ..mongodb.models.request_post import RequestPostDoc
from ..mongodb.models.project_manage import ProjectDoc
from ..mongodb.utils.field_validator import FieldValidator
from ..mongodb.types.request_post import RequestPostStatus
from ..mongodb.types.project_manager import ProjectStatus
from mongoengine.queryset.visitor import Q
import werkzeug

class WorkAchieveFetchAll(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        self.updateDatabase(userIdentity)

        user = UserDoc.objects(
            id=userIdentity,
        ).get()
                                                                                          
        resp = jsonify(
            user.workProfile.achievements,
        )

        return make_response(resp, return_code)

    def updateDatabase(self, userIdentity):
        user = UserDoc.objects(
            id=userIdentity,
        ).get()
        memberSince = user.workProfile.package.start if (user.workProfile.package) else None

        requestPosted = RequestPostDoc.objects(
            posterId=userIdentity,
            status = RequestPostStatus.PUBLISHED,
        ).count()

        requestAccepted = RequestPostDoc.objects(
            posterId=userIdentity,
            status = RequestPostStatus.ACCEPTED,
        ).count()

        ongoingProjects = ProjectDoc.objects(
            (Q(contract__providerId=userIdentity)
             | Q(contract__posterId=userIdentity))
            & Q(status = ProjectStatus.ONGOING)
        ).count()

        completedProjects = ProjectDoc.objects(
            (Q(contract__providerId=userIdentity)
             | Q(contract__posterId=userIdentity))
            & Q(status = ProjectStatus.DELIVERED)
        ).count()

        UserDoc.objects(
            id=userIdentity,
        ).update(
            set__workProfile__achievements__membership__memberSince = memberSince,
            set__workProfile__achievements__project__requestPosted = requestPosted,
            set__workProfile__achievements__project__requestAccepted = requestAccepted,
            set__workProfile__achievements__project__ongoingProjects = ongoingProjects,
            set__workProfile__achievements__project__completedProjects = completedProjects,
        )

routeMap = [
    {'res': WorkAchieveFetchAll,
     'url': '/api/work-achievement/fetch-all'},
]
