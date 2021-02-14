from .controllers import controllerMap
from flask import Flask, Blueprint
from flask_restful import Api, Resource, url_for

from flask_mongoengine import MongoEngine
from flask_jwt_extended import JWTManager
from flask_mail import Mail, Message
import os

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
    for c in controllerMap:
        api.add_resource(c['res'], c['url'])

    app.register_blueprint(api_bp)

    db = MongoEngine(app)

    # Setup the Flask-JWT-Extended extension
    app.config['JWT_SECRET_KEY'] = 'pv5m-tAa5D2q3j8EQ7kKA4nm2W0IdmxWkdVidLdDZzCdre30I0P_cQ'
    app.config['SECRET_KEY'] = 'fdbWuiXITfH2FI-2zrWpB48BKnQnhnUe53Us0C3vBy1fi_BvNWhH7A'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 900  # in seconds
    jwt = JWTManager(app)


    mail_settings = {
    "MAIL_SERVER": 'smtp.office365.com',
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.environ['EMAIL_USER'],,
    "MAIL_PASSWORD": os.environ['EMAIL_PASSWORD']
    }

    app.config.update(mail_settings)
    mail = Mail(app)

return app
