from flask_mail import Mail, Message
import os

mail_settings = {
    "MAIL_SERVER": 'smtp.office365.com',
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL": False,
    "MAIL_USERNAME": os.environ['EMAIL_USER'],
    "MAIL_PASSWORD": os.environ['EMAIL_PASSWORD'],
    "MAIL_DEFAULT_SENDER": "support@windpop.com",
}

mail = Mail()


def InitMail(app):
    mail.init_app(app)


def SendMail(recipient, subject, body):
    msg = Message()
    msg.add_recipient(recipient)
    msg.subject = subject
    msg.body = body
    mail.send(msg)
