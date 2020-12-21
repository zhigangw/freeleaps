import mongoengine as me
import json
from bson.objectid import ObjectId


class ExperiencePeriod(me.EmbeddedDocument):

    oid = me.ObjectIdField(required=True, default=ObjectId,
                           unique=True, primary_key=True)
    startDate = me.DateField()
    endDate = me.DateField()
    headline = me.StringField()
    description = me.StringField()

    @staticmethod
    def from_dic(jdesc):
        return ExperiencePeriod.from_json(json.dumps(jdesc))
