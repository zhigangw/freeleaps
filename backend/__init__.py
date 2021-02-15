from .controllers import controllerMap
from .utils.mail import mail_settings, InitMail
from flask import Flask, Blueprint
from flask_restful import Api, Resource, url_for

from flask_mongoengine import MongoEngine
from flask_jwt_extended import JWTManager


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


    app.config.update(mail_settings)
    InitMail(app)
    
    return app
