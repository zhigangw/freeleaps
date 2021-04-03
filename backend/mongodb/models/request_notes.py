import mongoengine as me


class Pay(me.EmbeddedDocument):
    totalBudget = me.DecimalField()
    currency = me.StringField()
    escortedDeposit = me.DecimalField()


# class PaymentPlanOnetime(me.EmbeddedDocument):
#     downPay = me.DecimalField()
#     acceptancePay = me.DecimalField()
#     payOff = me.DecimalField()


# class PaymentPlanPeriodic(me.EmbeddedDocument):
#     downPay = me.DecimalField()
#     periodic = me.StringField()
#     periodicPay = me.DecimalField()


# class PaymentPlanFreeform(me.EmbeddedDocument):
#     notes = me.StringField()


# class PaymentPlan(me.EmbeddedDocument):
#     plan = me.StringField()
#     onetime = me.EmbeddedDocumentField(PaymentPlanOnetime)
#     periodic = me.EmbeddedDocumentField(PaymentPlanPeriodic)
#     freeform = me.EmbeddedDocumentField(PaymentPlanFreeform)


# class DeliverPeriod(me.EmbeddedDocument):
#     periodInDays = me.DecimalField()


class RequestNotes(me.EmbeddedDocument):
    pay = me.EmbeddedDocumentField(Pay)
    notes = me.StringField()
