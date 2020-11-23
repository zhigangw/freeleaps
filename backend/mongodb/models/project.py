from flask.globals import request
import mongoengine as me
from .user import UserDoc
from .request import Request

class Contract(me.EmbeddedDocument):
    request = me.ReferenceField(UserDoc)

class WorkSite(me.EmbeddedDocument):
    team_site = me.StringField()
    git_site = me.StringField()


class Project(me.Document):
    buyer = me.ReferenceField(UserDoc)
    seller = me.ReferenceField(UserDoc)
    contract = me.EmbeddedDocumentField(Contract)
    work_site = me.EmbeddedDocumentField(WorkSite)