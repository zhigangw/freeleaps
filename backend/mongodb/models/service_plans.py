from flask.globals import request
import mongoengine as me


class Collabration(me.EmbeddedDocument):
    name = me.StringField()
    description = me.StringField()
    serviceProvider = me.StringField()
    entryUrl = me.URLField()
    username = me.StringField()


class CodeManagement(me.EmbeddedDocument):
    name = me.StringField()
    description = me.StringField()
    serviceProvider = me.StringField()
    entryUrl = me.URLField()
    username = me.StringField()

class PriceTag(me.EmbeddedDocument):
    name = me.StringField()
    price = me.DecimalField()
    currency = me.StringField()


class PaymentPlan(me.EmbeddedDocument):
    name = me.StringField()
    recurring = me.StringField()
    renew=me.StringField()

class ReachoutPlan(me.EmbeddedDocument):
    name = me.StringField()
    limitOfPostRequests = me.DecimalField()
    limitOfQuoteRequests = me.DecimalField()
    limitOfReachout = me.DecimalField()

class ServicePlansDoc(me.Document):
    name = me.StringField()
    description = me.StringField()
    codeMangagement = me.EmbeddedDocumentField(CodeManagement)
    collabration = me.EmbeddedDocumentField(Collabration)
    priceTag = me.EmbeddedDocumentField(PriceTag)
    paymentPlan = me.EmbeddedDocumentField(PaymentPlan)
    reachoutPlan = me.EmbeddedDocumentField(ReachoutPlan)
