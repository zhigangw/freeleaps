import mongoengine as me
from .experience import Experience


class CareerProfile(me.EmbeddedDocument):
    experience = me.EmbeddedDocumentField(Experience)
    preferredRoles = me.ListField(me.StringField())
    preferredTags = me.ListField(me.StringField())
