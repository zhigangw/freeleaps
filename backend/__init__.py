import os

from flask import Flask, Blueprint
from flask_restful import Api, Resource, url_for
from .controllers.user import UserRegister


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)


    app.config['MONGODB_SETTINGS'] = {
        'db': 'freeleaps',
        'host': 'localhost',
        'port': 27017
    }

    api_bp = Blueprint('api', __name__)

    api = Api(api_bp)
    api.add_resource(UserRegister, '/api/user-register')
    app.register_blueprint(api_bp)

    return app
