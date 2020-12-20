import mongoengine as me
from .auth.auth_profile import AuthProfile
from .career.career_profile import CareerProfile
from .personal.personal_profile import PersonalProfile
from .work.work_profile import WorkProfile


class Skill(me.EmbeddedDocument):
    name = me.StringField()


class SellerProfile(me.EmbeddedDocument):
    content = me.StringField()
    savedRequests = me.ListField(me.StringField())


class BuyerProfile(me.EmbeddedDocument):
    content = me.StringField()


class UserDoc(me.Document):
    authProfile = me.EmbeddedDocumentField(AuthProfile)
    personalProfile = me.EmbeddedDocumentField(PersonalProfile)
    workProfile = me.EmbeddedDocumentField(WorkProfile)
    careerProfile = me.EmbeddedDocumentField(CareerProfile)
    sellerProfile = me.EmbeddedDocumentField(SellerProfile)
    buyerProfile = me.EmbeddedDocumentField(BuyerProfile)
