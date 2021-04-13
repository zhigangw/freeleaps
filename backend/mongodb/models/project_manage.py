from flask.globals import request
import mongoengine as me
from .request_quote import QuoteNotes

class Contract(me.EmbeddedDocument):
    requestId = me.StringField()
    quoteId = me.StringField()
    posterId = me.StringField()
    providerId = me.StringField()

class WorkSite(me.EmbeddedDocument):
    teamSite = me.StringField()
    gitSite = me.StringField()


class ProjectDoc(me.Document):
    createdDate = me.DateField()
    updatedDate = me.DateField()
    status = me.IntField()
    headline=me.StringField()
    deliveredDate =me.DateField()
    kickoffDate = me.DateField()
    contract = me.EmbeddedDocumentField(Contract)
    workSite = me.EmbeddedDocumentField(WorkSite)