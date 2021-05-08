from flask.globals import request
import mongoengine as me
import datetime


class MembershipAchievement(me.EmbeddedDocument):
    memberSince = me.DateField()
    receivedStars = me.DecimalField()


class ProjectAchievement(me.EmbeddedDocument):
    requestPosted = me.IntField()
    requestAccepted = me.IntField()
    ongoingProjects = me.IntField()
    completedProjects = me.IntField()


class PaymentAchievement(me.EmbeddedDocument):
    amountSpent = me.DecimalField()
    escortedDeposit = me.DecimalField()


class WorkAchievement(me.EmbeddedDocument):
    membership = me.EmbeddedDocumentField(MembershipAchievement)
    payment = me.EmbeddedDocumentField(PaymentAchievement)
    project = me.EmbeddedDocumentField(ProjectAchievement)
