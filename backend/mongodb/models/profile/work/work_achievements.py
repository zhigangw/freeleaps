from flask.globals import request
import mongoengine as me
import datetime

class WorkAchievement(me.EmbeddedDocument):
    jobPosted = me.IntField()
    amountSpent = me.DecimalField()
    escortedDeposit = me.DecimalField()
    memberSince = me.DateField()
    ongoingProjects = me.IntField()
    completedProjects = me.IntField()
    receivedStars = me.DecimalField()