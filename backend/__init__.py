import os

from flask import Flask, Blueprint
from flask_restful import Api, Resource, url_for
from .controllers.user_auth import (
    UserSignout,
    UserSignup,
    UserSignin,
    UserIsNameAvailable,
    UserUpdateUsername,
    UserUpdatePassword
)
from .controllers.request_post import (
    RequestPostFillDescription,
    RequestPostFetchDescription,
    RequestPostFillNotes,
    RequestPostFetchNotes,
    RequestPostFillStatus,
    RequestPostFetchMyAllAsSummary,
    RequestPostFetchAllPublishedAsSummary,
    RequestPostFetchWhole,

)
from .controllers.request_quote import (
    RequestQuoteAcceptQuote,
    RequestQuoteSubmit,
    RequestQuoteMine,
    RequestQuoteFetchQuotes,
    RequestQuoteFetchOpen
)
from .controllers.user_profile import (
    UserProfileFetchSettings, 
    UserProfileFetchAccount,
    UserProfileFetchWork,
    UserProfileFetchPersonal,
    UserProfileChoosePackage,
    UserProfileUpdateName
)
from .controllers.seller_profile import (
    SellerProfileSaveRequest,
    SellerProfileFetchSavedRequests
)
from .controllers.project_manage import ProjectManageFetchForProvider
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
    api.add_resource(UserSignup, '/api/user/signup')
    api.add_resource(UserSignin, '/api/user/signin')
    api.add_resource(UserSignout, '/api/user/signout')
    api.add_resource(UserUpdateUsername, '/api/user/update-username')
    api.add_resource(UserUpdatePassword, '/api/user/update-password')

    api.add_resource(UserIsNameAvailable,
                     '/api/user/check-username-availability')

    api.add_resource(UserProfileFetchSettings,
                     '/api/user-profile/fetch-settings')
    api.add_resource(UserProfileFetchAccount,
                     '/api/user-profile/fetch-account')
    api.add_resource(UserProfileFetchWork,
                     '/api/user-profile/fetch-work')
    api.add_resource(UserProfileFetchPersonal,
                     '/api/user-profile/fetch-personal')
    api.add_resource(UserProfileUpdateName,
                     '/api/user-profile/update-name')
    api.add_resource(UserProfileChoosePackage,
                     '/api/user-profile/choose-package')

    api.add_resource(RequestPostFillDescription,
                     '/api/request-post/fill-description')
    api.add_resource(RequestPostFetchDescription,
                     '/api/request-post/fetch-description')
    api.add_resource(RequestPostFillNotes, '/api/request-post/fill-note')
    api.add_resource(RequestPostFetchNotes, '/api/request-post/fetch-notes')
    api.add_resource(RequestPostFillStatus, '/api/request-post/fill-status')
    api.add_resource(RequestPostFetchMyAllAsSummary,
                     '/api/request-post/mine-summary')
    api.add_resource(RequestPostFetchAllPublishedAsSummary,
                     '/api/request-post/published-summary')
    api.add_resource(RequestPostFetchWhole, '/api/request-post/fetch-whole')

    api.add_resource(RequestQuoteSubmit, '/api/request-quote/submit-quote')
    api.add_resource(RequestQuoteMine, '/api/request-quote/fetch-mine')
    api.add_resource(RequestQuoteFetchQuotes,
                     '/api/request-quote/fetch-quotes')
    api.add_resource(RequestQuoteAcceptQuote,
                     '/api/request-quote/accept-quote')
    api.add_resource(RequestQuoteFetchOpen,
                     '/api/request-quote/fetch-open')

    api.add_resource(SellerProfileSaveRequest,
                     '/api/seller-profile/save-request')
    api.add_resource(SellerProfileFetchSavedRequests,
                     '/api/seller-profile/fetch-saved-requests')

    api.add_resource(ProjectManageFetchForProvider,
                     '/api/project-manage/fetch-for-provider')

    app.register_blueprint(api_bp)

    db = MongoEngine(app)

    # Setup the Flask-JWT-Extended extension
    app.config['JWT_SECRET_KEY'] = 'pv5m-tAa5D2q3j8EQ7kKA4nm2W0IdmxWkdVidLdDZzCdre30I0P_cQ'
    app.config['SECRET_KEY'] = 'fdbWuiXITfH2FI-2zrWpB48BKnQnhnUe53Us0C3vBy1fi_BvNWhH7A'
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 900  # in seconds
    jwt = JWTManager(app)

    return app
