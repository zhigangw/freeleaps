import mongoengine as me
class UserDoc(me.Document):
    name = me.StringField()
    email = me.StringField(primary_key=True)
