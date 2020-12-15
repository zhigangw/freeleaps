import mongoengine as me


class AuthProfile(me.EmbeddedDocument):
    identity = me.StringField()
    password = me.StringField()
    role = me.IntField()


class PersonalProfile(me.EmbeddedDocument):
    firstName = me.StringField()
    lastName = me.StringField()
    email = me.StringField()
    mobile = me.StringField()
    photo = me.StringField()
    location = me.StringField()


class WorkProfile(me.EmbeddedDocument):
    email = me.StringField()
    fileSite = me.StringField()
    codeSite = me.StringField()
    servicesSite = me.StringField()
    package = me.IntField()


class ExperiencePeriod(me.EmbeddedDocument):
    startDate = me.DateTimeField()
    endDate = me.DateTimeField()
    jobTitle = me.StringField()
    description = me.StringField()


class Experience(me.EmbeddedDocument):
    topline = me.StringField()
    periods = me.EmbeddedDocumentListField(ExperiencePeriod)
    linkedinPage = me.StringField()


class Skill(me.EmbeddedDocument):
    name = me.StringField()


class CareerProfile(me.EmbeddedDocument):
    experience = me.StringField()
    JobRole = me.StringField()



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
