import mongoengine as me
from .experience import Experience


class Wage(me.EmbeddedDocument):
    amount = me.IntField()
    period = me.StringField(required=True, default="hourly")
    currency = me.StringField(required=True, default="USD")


class CareerProfile(me.EmbeddedDocument):
    experience = me.EmbeddedDocumentField(Experience)
    preferredRoles = me.ListField(me.StringField())
    preferredTags = me.ListField(me.StringField())
    wage = me.EmbeddedDocumentField(Wage)
