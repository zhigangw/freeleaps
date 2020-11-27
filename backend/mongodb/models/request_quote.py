import mongoengine as me
from .request_post import RequestNotes 


class RequestQuote(me.Document):
    providerIdentity = me.StringField()
    updatedDate = me.DateTimeField()
    notes = me.EmbeddedDocumentField(RequestNotes)