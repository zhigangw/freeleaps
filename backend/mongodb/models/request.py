import mongoengine as me
from .user import UserDoc

class Quote(me.EmbeddedDocument):
    provider = me.ReferenceField(UserDoc)


class Request(me.Document):
    poster = me.ReferenceField(UserDoc)
    quotes = me.EmbeddedDocumentListField(Quote)