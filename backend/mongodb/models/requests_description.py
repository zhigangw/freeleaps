import mongoengine as me

class RequestDescription(me.EmbeddedDocument):
    headline = me.StringField()
    details = me.StringField()