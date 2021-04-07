from flask.globals import request
import mongoengine as me


class Pay(me.EmbeddedDocument):
    totalBudget = me.DecimalField()
    currency = me.StringField()
    escortedDeposit = me.DecimalField()

class QuoteNotes(me.EmbeddedDocument):
    requestId = me.StringField()
    status = me.IntField() #0 -- drafted 1 -- sent 2 -- rejected 3 -- accepted
    pay = me.EmbeddedDocumentField(Pay)
    notes = me.StringField()


class RequestQuoteDoc(me.Document):
    providerId = me.StringField()
    createdDate = me.DateTimeField()
    updatedDate = me.DateTimeField()
    notes = me.EmbeddedDocumentField(QuoteNotes)