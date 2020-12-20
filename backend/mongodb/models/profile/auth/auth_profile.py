import mongoengine as me


class AuthProfile(me.EmbeddedDocument):
    identity = me.StringField()
    password = me.StringField()
    role = me.IntField()
