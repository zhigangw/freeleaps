import mongoengine as me
from .service_subscription import ServiceSubscription


class WorkProfile(me.EmbeddedDocument):
    package = me.EmbeddedDocumentField(ServiceSubscription)
