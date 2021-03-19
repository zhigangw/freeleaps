from flask.globals import request
import mongoengine as me
from ...service_plans import ServicePlanDoc


class ServiceSubscription(me.EmbeddedDocument):
    plan_id = me.ObjectIdField()
    start = me.DateField()
