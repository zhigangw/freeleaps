import mongoengine as me
import json

class ExperiencePeriod(me.EmbeddedDocument):
    startDate = me.DateTimeField()
    endDate = me.DateTimeField()
    headline = me.StringField()
    description = me.StringField()

    @staticmethod
    def from_dic(jdesc):
        return ExperiencePeriod.from_json(json.dumps(jdesc))