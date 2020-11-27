from flask.globals import request
import mongoengine as me
from .request_notes import RequestNotes 


class RequestQuoteDoc(me.Document):
    requestId = me.StringField()
    providerIdentity = me.StringField()
    updatedDate = me.DateTimeField()
    notes = me.EmbeddedDocumentField(RequestNotes)