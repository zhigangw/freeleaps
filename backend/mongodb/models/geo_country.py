import mongoengine as me


class CountryDoc(me.DynamicDocument):
    name = me.StringField()
