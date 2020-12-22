import mongoengine as me
import json
from bson.objectid import ObjectId
import datetime


class ExperiencePeriod(me.EmbeddedDocument):

    oid = me.ObjectIdField(required=True, default=ObjectId,
                           unique=True, primary_key=True)
    startDate = me.DateField()
    endDate = me.DateField()
    headline = me.StringField()
    description = me.StringField()
    createdDate = me.DateTimeField(
        default=datetime.datetime.utcnow, required=True)
    modifiedDate = me.DateTimeField(
        default=datetime.datetime.utcnow, required=True)

    @staticmethod
    def from_dic(jdesc):
        return ExperiencePeriod.from_json(json.dumps(jdesc))

    def get_generation_time(self):
        return self.oid.generation_time
