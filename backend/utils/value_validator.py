from bson import ObjectId

class ValueValidator():
    @staticmethod
    def assureEqual(value1, value2, fieldName):
        if(value1 != value2):
            raise ValueError("{fieldName}: value: {value1} should be equal to {value2}".format(
                fieldName, value1, value2))

