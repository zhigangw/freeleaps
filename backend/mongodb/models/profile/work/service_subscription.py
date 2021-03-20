from flask.globals import request
import mongoengine as me
import datetime


class ServiceSubscription(me.EmbeddedDocument):
    plan_id = me.ObjectIdField()
    start = me.DateField(
        default=datetime.datetime.utcnow, required=True)
