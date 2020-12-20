import mongoengine as me
class WorkProfile(me.EmbeddedDocument):
    email = me.StringField()
    fileSite = me.StringField()
    codeSite = me.StringField()
    servicesSite = me.StringField()
    package = me.IntField()

