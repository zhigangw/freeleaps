from functools import wraps
from datetime import datetime, timedelta

from flask import jsonify, request

from flask_restful import Api, Resource, url_for
import jwt

from ..mongodb.models.user import User
from ..mongodb.db import db


class UserRegister(Resource):
    def get(self):
        return jsonify(text='Hello, register!')

    # data = request.get_json()
    # user = User(**data)
    # db.session.add(user)
    # db.session.commit()
    # return jsonify(user.to_dict()), 201
