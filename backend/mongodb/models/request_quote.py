from flask.globals import request
import mongoengine as me


class Pay(me.EmbeddedDocument):
    totalBudget = me.DecimalField()
    currency = me.StringField()
    escortedDeposit = me.DecimalField()

class QuoteNotes(me.EmbeddedDocument):
    requestId = me.StringField()
    status = me.IntField() #0 -- draft 1 -- submmited 2 -- reviewed 3 -- accepted  4 -- rejected
    pay = me.EmbeddedDocumentField(Pay)
    notes = me.StringField()


class RequestQuoteDoc(me.Document):
    providerId = me.StringField()
    createdDate = me.DateTimeField()
    updatedDate = me.DateTimeField()
    notes = me.EmbeddedDocumentField(QuoteNotes)