from bson import ObjectId

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


