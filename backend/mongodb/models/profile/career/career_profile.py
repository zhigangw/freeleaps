import mongoengine as me
from .experience import Experience

class CareerProfile(me.EmbeddedDocument):
    experience = me.EmbeddedDocumentField(Experience)
    jobRole = me.StringField()
    linkedinPage = me.StringField()
