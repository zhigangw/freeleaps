import mongoengine as me
from .user import UserDoc


class RequestDescription(me.EmbeddedDocument):
    problemStatement = me.StringField()
    deliverables = me.StringField()
    criteria = me.StringField()


class RequestNotes(me.EmbeddedDocument):
    totalBudget = me.IntField()
    currency = me.StringField()
    escortedDeposit = me.IntField()
    estimatedHours = me.IntField()
    qualification = me.StringField()
    notes = me.StringField()


class RequestQuote(me.EmbeddedDocument):
    providerIdentity = me.StringField()


class RequestPostDoc(me.Document):
    posterIdentity = me.StringField()
    status = me.IntField()  # 0 -- draft 1 -- published
    createdDate = me.DateTimeField()
    updatedDate = me.DateTimeField()
    statueUpdatedDate = me.DateTimeField()
    description = me.EmbeddedDocumentField(RequestDescription)
    notes = me.EmbeddedDocumentField(RequestNotes)
    quotes = me.EmbeddedDocumentListField(RequestQuote)
