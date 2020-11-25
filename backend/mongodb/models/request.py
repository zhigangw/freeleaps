import mongoengine as me
from .user import UserDoc

class RequestDescription(me.EmbeddedDocument):
    problemStatement = me.StringField
    deliverables = me.StringField
    criteria = me.StringField

class RequestNotes(me.EmbeddedDocument):
    totalBudget = me.IntField
    currency = me.StringField
    escortedDeposit = me.IntField
    estimatedHours = me.IntField
    qualification = me.StringField
    notes = me.StringField

class RequestQuote(me.EmbeddedDocument):
    provider = me.ReferenceField(UserDoc)


class RequestPostDoc(me.Document):
    poster = me.ReferenceField(UserDoc)
    status = me.IntField # 0 -- draft 1 -- published
    description = me.EmbeddedDocumentField(RequestDescription)
    notes = me.EmbeddedDocumentField(RequestNotes)
    quotes = me.EmbeddedDocumentListField(RequestQuote)
