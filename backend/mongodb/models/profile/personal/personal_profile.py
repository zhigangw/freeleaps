import mongoengine as me
class PersonalProfile(me.EmbeddedDocument):
    firstName = me.StringField()
    lastName = me.StringField()
    email = me.StringField()
    mobile = me.StringField()
    photo = me.StringField()
    location = me.StringField()