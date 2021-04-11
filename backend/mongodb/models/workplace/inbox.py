from flask.globals import request
import mongoengine as me


class InboxDoc(me.Document):
    userId = me.StringField()
    category = me.IntField()
    documentId =  me.StringField()