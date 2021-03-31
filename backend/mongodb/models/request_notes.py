import mongoengine as me


class PaymentAmount(me.EmbeddedDocument):
    totalBudget = me.DecimalField()
    currency = me.StringField()
    escortedDeposit = me.DecimalField()


class PaymentPlanOnetime(me.EmbeddedDocument):
    downPay = me.DecimalField()
    acceptancePay = me.DecimalField()
    payOff = me.DecimalField()


class PaymentPlanPeriodic(me.EmbeddedDocument):
    downPay = me.DecimalField()
    perodicDays = me.DecimalField()
    PerodicPay = me.DecimalField()


class PaymentPlanFreeform(me.EmbeddedDocument):
    note = me.StringField()


class PaymentPlan(me.EmbeddedDocument):
    onetime = me.EmbeddedDocumentField(PaymentPlanOnetime)
    periodic = me.EmbeddedDocumentField(PaymentPlanPeriodic)
    freeform = me.EmbeddedDocumentField(PaymentPlanFreeform)


class DeliverPeriod(me.EmbeddedDocument):
    startDate = me.DateTimeField()
    deliverDate = me.DateTimeField()


class RequestNotes(me.EmbeddedDocument):
    payment = me.EmbeddedDocumentField(PaymentAmount)
    plan = me.EmbeddedDocumentField(PaymentPlan)
    period = me.EmbeddedDocumentField(DeliverPeriod)
    notes = me.StringField()
