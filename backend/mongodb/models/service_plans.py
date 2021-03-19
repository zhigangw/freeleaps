from flask.globals import request
import mongoengine as me


class Collabration(me.EmbeddedDocument):
    name = me.StringField()
    description = me.StringField()
    serviceProvider = me.StringField()
    url = me.URLField()
    email = me.EmailField()


class CodeManagement(me.EmbeddedDocument):
    name = me.StringField()
    description = me.StringField()
    serviceProvider = me.StringField()
    url = me.URLField()

class PriceTag(me.EmbeddedDocumentField):
    name = me.StringField()
    price = me.DecimalField()
    currency = me.StringField()


class PaymentPlan(me.Document):
    name = me.StringField()
    recurring = me.StringField()
    renew=me.StringField()

class ServicePlanDoc(me.Document):
    name = me.StringField()
    description = me.StringField()
    limitOfPostRequests = me.DecimalField()
    limitOfQuoteRequests = me.DecimalField()
    limitOfReachout = me.DecimalField()
    codeMangagement = me.EmbeddedDocumentField(CodeManagement)
    collabration = me.EmbeddedDocumentField(Collabration)
    priceTag = me.EmbeddedDocumentField(PriceTag)
    paymentPlan = me.EmbeddedDocumentField(PaymentPlan)
