import mongoengine as me
from .experience_period import ExperiencePeriod

class Experience(me.EmbeddedDocument):
    headline = me.StringField()
    highlight = me.StringField()
    periods = me.EmbeddedDocumentListField(ExperiencePeriod)
