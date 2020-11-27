import mongoengine as me

class RequestNotes(me.EmbeddedDocument):
    totalBudget = me.IntField()
    currency = me.StringField()
    escortedDeposit = me.IntField()
    estimatedHours = me.IntField()
    qualification = me.StringField()
    notes = me.StringField()