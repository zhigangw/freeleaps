import mongoengine as me
class UserDoc(me.Document):
    email = me.StringField(primary_key=True)
    password = me.StringField()
    role = me.IntField
