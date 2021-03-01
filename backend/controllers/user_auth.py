from functools import wraps
from datetime import datetime, timedelta
import hashlib
from flask import jsonify, make_response
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, create_access_token, get_jwt_identity
)
from ..mongodb.models.profile.user import UserDoc, AuthProfile, WorkProfile, PersonalProfile
from flask_mail import Message
from ..utils.mail import SendMail
from ..utils.stringUtils import GenerateRandomPassword, GenerateHash


def create_jwt_token(identity):
    access_token = create_access_token(identity=identity)
    expiresIn = datetime.utcnow() + timedelta(minutes=10)
    return access_token, expiresIn


class SendTempPasswordToEmail(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    def post(self):
        args = self.user_signup_post_parser.parse_args()
        return_code = 200
        resp = None

        users = UserDoc.objects(authProfile__email=args.email)
        if users.count() <= 0:
            resp = jsonify(text="email does not exist")
            return_code = 401
            return make_response(resp, return_code)

        user = users.first()
        tempPwd = GenerateRandomPassword()
        hash = GenerateHash(tempPwd)

        user.authProfile.password = hash
        user.save()

        SendMail(user.authProfile.email, "Freeleaps Support",
                 tempPwd)
        resp = jsonify(text="sent temp password to mailbox")
        return_code = 200

        return make_response(resp, return_code)


class SendUsernameToEmail(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    def post(self):
        args = self.user_signup_post_parser.parse_args()
        return_code = 200
        resp = None

        users = UserDoc.objects(authProfile__email=args.email)
        if users.count() <= 0:
            resp = jsonify(text="email does not exist")
            return_code = 401
            return make_response(resp, return_code)

        user = users.first()
        if user.authProfile.identity is not None:
            SendMail(user.authProfile.email, "Freeleaps Support",
                     user.authProfile.identity)
            resp = jsonify(text="sent username to mailbox")
            return_code = 200
        else:
            resp = jsonify(text="username does not exist")
            return_code = 401

        return make_response(resp, return_code)


class EmailSignin(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s username',
        )
        self.post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.post_parser.parse_args()
        email = args.email
        queryset = UserDoc.objects(authProfile__email__iexact=email,
                                   authProfile__password=hashlib.md5(
                                       args.password.encode('utf-8')).hexdigest()
                                   )
        return_code = 200
        resp = None
        if(queryset.count() == 0):
            resp = jsonify(text="user doesn't exist")
            return_code = 401
        else:
            user = queryset.first()
            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=str(user.id),
                expiresIn=expiresIn,
                role=user.authProfile.role)
        return make_response(resp, return_code)


class EmailSignup(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )
        self.user_signup_post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.user_signup_post_parser.parse_args()
        return_code = 200
        resp = None

        if(UserDoc.objects(authProfile__email=args.email).count() > 0):
            resp = jsonify(text="uesr exists")
            return_code = 401
        else:
            user = UserDoc(authProfile=AuthProfile(
                password=hashlib.md5(
                    args.password.encode('utf-8')).hexdigest(),
                role=1,  # 1 -- USER
                email=args.email
            ),
            )
            user.save()

            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=str(user.id),
                expiresIn=expiresIn,
                role=user.authProfile.role
            )
        return make_response(resp, return_code)


class UserSignup(Resource):
    def __init__(self) -> None:
        self.user_signup_post_parser = reqparse.RequestParser()
        self.user_signup_post_parser.add_argument(
            'username', dest='username',
            type=str, location='json',
            required=True, help='The user\'s username',
        )
        self.user_signup_post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.user_signup_post_parser.parse_args()
        return_code = 200
        resp = None

        if(UserDoc.objects(authProfile__identity=args.username).count() > 0):
            resp = jsonify(text="uesr exists")
            return_code = 401
        else:
            user = UserDoc(authProfile=AuthProfile(
                identity=args.username,
                password=hashlib.md5(
                    args.password.encode('utf-8')).hexdigest()),
                workProfile=WorkProfile(
                    email=args.username+"@freeleaps.com",
                    fileSite="file.freeleaps.com/"+args.username,
                    codeSite="code.freeleaps.com/"+args.username,
                    servicesSite="service.freeleaps.com/"+args.username,
                    package=0)
            )
            user.save()

            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=user.id,
                expiresIn=expiresIn,
                role=user.authProfile.role
            )
        return make_response(resp, return_code)


class UserSignin(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'username', dest='username',
            type=str, location='json',
            required=True, help='The user\'s username',
        )
        self.post_parser.add_argument(
            'password', dest='password',
            location='json', required=True,
            help='The user\'s password',
        )

    def post(self):
        args = self.post_parser.parse_args()
        identity = args.username
        queryset = UserDoc.objects(authProfile__identity__iexact=identity,
                                   authProfile__password=hashlib.md5(
                                       args.password.encode('utf-8')).hexdigest()
                                   )
        return_code = 200
        resp = None
        if(queryset.count() == 0):
            resp = jsonify(text="user doesn't exist")
            return_code = 401
        else:
            user = queryset.first()
            access_token, expiresIn = create_jwt_token(identity=str(user.id))
            resp = jsonify(
                access_token=access_token,
                identity=str(user.id),
                expiresIn=expiresIn,
                role=user.authProfile.role)
        return make_response(resp, return_code)


class UserSignout(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        user = UserDoc.objects(id=identity).first()
        resp = None
        return_code = 200
        if user != None:
            resp = jsonify(
                identity=identity)
        else:
            resp = jsonify(text="invalid user token. user not exists")
            return_code = 404
        return make_response(resp, return_code)


class UserIsNameAvailable(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'identity', dest='identity',
            type=str, location='json',
            required=True, help='The user\'s identity',
        )

    def post(self):
        args = self.post_parser.parse_args()
        identity = args.identity

        available = False if UserDoc.objects(
            authProfile__identity=identity).count() > 0 else True
        resp = jsonify(
            available=available
        )
        return make_response(resp, 200)


class UserUpdateUsername(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'identity', dest='identity',
            type=str, location='json',
            required=True, help='The user\'s identity',
        )

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        resp = None
        args = self.post_parser.parse_args()
        username = args.identity

        UserDoc.objects(
            id=identity
        ).update(
            authProfile__identity=username)

        return_code = 200
        resp = jsonify(
            identity=username
        )

        return make_response(resp, return_code)


class UserUpdatePassword(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'password', dest='password',
            type=str, location='json',
            required=True, help='The user\'s password',
        )

    @jwt_required
    def post(self):
        identity = get_jwt_identity()
        resp = None
        args = self.post_parser.parse_args()
        return_code = 200

        UserDoc.objects(
            id=identity
        ).update(
            authProfile__password=hashlib.md5(
                args.password.encode('utf-8')).hexdigest()
        )
        resp = jsonify(
            text="password is updated",
        )

        return make_response(resp, return_code)


class UserProfileUpdateMobile(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'mobile', dest='mobile',
            type=str, location='json',
            required=True, help='The user\'s mobile',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        affected = UserDoc.objects(
            id=userIdentity,
        ).update(
            set__authProfile__mobile=args.mobile,
        )
        if(affected > 0):
            resp = jsonify(
                mobile=args.mobile,
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


class UserProfileUpdateEmail(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    @jwt_required
    def post(self):
        args = self.post_parser.parse_args()
        return_code = 200
        resp = None
        userIdentity = get_jwt_identity()

        affected = UserDoc.objects(
            id=userIdentity,
        ).update(
            set__authProfile__email=args.email,
        )
        if(affected > 0):
            resp = jsonify(
                email=args.email,
            )
        else:
            resp = jsonify(
                text="failed."
            )
            return_code = 404

        return make_response(resp, return_code)


class CheckUserExistanceByEmail(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()
        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    def post(self):
        resp = None
        args = self.post_parser.parse_args()
        return_code = 200

        email = args.email
        users = UserDoc.objects(authProfile__email=email)

        userNameExists = False
        userExists = True if users.count() > 0 else False
        if userExists:
            userNameExists = users.first().authProfile.identity is not None

        resp = jsonify(
            userNameExists=userNameExists,
            userExists=userExists
        )
        return make_response(resp, return_code)


class CheckUsernameAndEmail(Resource):
    def __init__(self) -> None:
        self.post_parser = reqparse.RequestParser()

        self.post_parser.add_argument(
            'identity', dest='identity',
            type=str, location='json',
            required=True, help='The user\'s identity',
        )

        self.post_parser.add_argument(
            'email', dest='email',
            type=str, location='json',
            required=True, help='The user\'s email',
        )

    def post(self):
        resp = None
        args = self.post_parser.parse_args()
        return_code = 200

        email = args.email
        identity = args.identity
        users = UserDoc.objects(
            authProfile__identity=identity,
            authProfile__email=email)

        userExists = True if users.count() > 0 else False
        resp = jsonify(
            userExists=userExists
        )
        return make_response(resp, return_code)


routeMap = [
    {'res': SendTempPasswordToEmail, 'url': '/api/user/send-temp-password-to-email'},
    {'res': SendUsernameToEmail, 'url': '/api/user/send-username-to-email'},
    {'res': EmailSignin, 'url': '/api/user/email-signin'},
    {'res': EmailSignup, 'url': '/api/user/email-signup'},
    {'res': UserSignup, 'url': '/api/user/signup'},
    {'res': UserSignin, 'url': '/api/user/signin'},
    {'res': UserSignout, 'url': '/api/user/signout'},
    {'res': UserUpdateUsername, 'url': '/api/user/update-username'},
    {'res': UserUpdatePassword, 'url': '/api/user/update-password'},
    {'res': UserIsNameAvailable,
     'url': '/api/user/check-username-availability'},
    {'res': UserProfileUpdateMobile,
     'url': '/api/user-profile/update-mobile'},
    {'res': UserProfileUpdateEmail,
     'url': '/api/user-profile/update-email'},
    {'res': CheckUserExistanceByEmail,
     'url': '/api/user-profile/check-existance-by-email'},
    {'res': CheckUsernameAndEmail,
     'url': '/api/user-profile/check-username-and-email'},
]
