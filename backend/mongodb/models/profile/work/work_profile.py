import mongoengine as me
from .service_subscription import ServiceSubscription
from .work_achievements import WorkAchievement


class WorkProfile(me.EmbeddedDocument):
    package = me.EmbeddedDocumentField(ServiceSubscription)
    achievements = me.EmbeddedDocumentField(WorkAchievement)
