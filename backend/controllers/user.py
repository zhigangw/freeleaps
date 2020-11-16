from functools import wraps
from datetime import datetime, timedelta

from flask import jsonify, request

from flask_restful import Api, Resource, url_for
import jwt

from ..mongodb.models.user import UserDoc


class UserRegister(Resource):
    def post(self):
        user = UserDoc(name="Zhigang Wang", email="wzg1973@gmail.com")
        user.save()
        return jsonify(text='Hello, register!')


class UserSignin(Resource):
    def get(self):
        user = UserDoc.objects(name="Zhigang Wang")
        return jsonify(user)


class UserLogout(Resource):
    def get(self):
        UserDoc.objects(name="Zhigang Wang").delete()
        return jsonify(text='Hello, logout:')
