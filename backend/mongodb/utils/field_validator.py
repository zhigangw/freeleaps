from bson import ObjectId
import json
from ..models.request_notes import RequestNotes
from ..models.requests_description import RequestDescription
from ..models.request_quote import QuoteNotes


class FieldValidator():
    @staticmethod
    def is_valid_oid(oid):
        return ObjectId.is_valid(oid)

    @staticmethod
    def objectid(oid):
        if(oid == 'null'):
            return None
        if(FieldValidator.is_valid_oid(oid)):
            return ObjectId(oid)
        else:
            raise ValueError('{} is not a valid object id'.format(oid))

    @staticmethod
    def notes(jnote):
        try:
            return RequestNotes.from_json(json.dumps(jnote))
        except Exception as e:
            print(e)
            raise

    @staticmethod
    def description(jdesc):
        return RequestDescription.from_json(json.dumps(jdesc))

    @staticmethod
    def quoteNotes(jnote):
        try:
            return QuoteNotes.from_json(json.dumps(jnote))
        except Exception as e:
            print(e)
            raise

    @staticmethod
    def stringList(jdesc):
        try:
            return json.loads(json.dumps(jdesc))
        except Exception as e:
            print(e)
            raise

