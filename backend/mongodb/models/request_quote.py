from flask.globals import request
import mongoengine as me
from .request_notes import RequestNotes 


class RequestQuoteDoc(me.Document):
    requestId = me.StringField()
    providerId = me.StringField()
    updatedDate = me.DateTimeField()
    status = me.IntField() #RequestQuoteStatus
    notes = me.EmbeddedDocumentField(RequestNotes)