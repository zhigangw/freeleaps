import mongoengine as me

class JobRoleDoc(me.DynamicDocument):
    name=me.StringField()