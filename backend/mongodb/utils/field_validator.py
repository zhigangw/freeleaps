from bson import ObjectId
import json
from ..models.request_notes import RequestNotes
from ..models.requests_description import RequestDescription

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


    def description(jdesc):
        return RequestDescription.from_json(json.dumps(jdesc))
