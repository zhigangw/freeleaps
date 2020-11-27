import mongoengine as me

from .requests_description import RequestDescription
from .request_notes import RequestNotes 

class RequestPostDoc(me.Document):
    posterIdentity = me.StringField()
    status = me.IntField()  # 0 -- draft 1 -- published
    createdDate = me.DateTimeField()
    updatedDate = me.DateTimeField()
    statueUpdatedDate = me.DateTimeField()
    description = me.EmbeddedDocumentField(RequestDescription)
    notes = me.EmbeddedDocumentField(RequestNotes)
