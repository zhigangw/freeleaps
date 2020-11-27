import mongoengine as me

class RequestDescription(me.EmbeddedDocument):
    problemStatement = me.StringField()
    deliverables = me.StringField()
    criteria = me.StringField()
