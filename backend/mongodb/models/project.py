from flask.globals import request
import mongoengine as me
from .user import UserDoc

class Contract(me.EmbeddedDocument):
    requestId = me.StringField()
    quoteId = me.StringField()

class WorkSite(me.EmbeddedDocument):
    teamSite = me.StringField()
    gitSite = me.StringField()


class ProjectDoc(me.Document):
    createdDate = me.DateField()
    updatedDate = me.DateField()
    contract = me.EmbeddedDocumentField(Contract)
    workSite = me.EmbeddedDocumentField(WorkSite)