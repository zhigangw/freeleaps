import mongoengine as me

class AuthProfile(me.EmbeddedDocument):
    identity = me.StringField()
    password = me.StringField()
    role = me.IntField()

class UserProfile(me.EmbeddedDocument):
    firstname = me.StringField()
    lastname = me.StringField()
    email = me.StringField()
    mobile = me.StringField()
    photo = me.StringField()
    resume = me.StringField()
    linkedin_page = me.StringField()


class WorkerProfile(me.EmbeddedDocument):
    email = me.StringField()
    home_page = me.StringField()


class SellerProfile(me.EmbeddedDocument):
    content = me.StringField()


class BuyerProfile(me.EmbeddedDocument):
    content = me.StringField()


class UserDoc(me.Document):
    auth_profile = me.EmbeddedDocumentField(AuthProfile)
    user_profile = me.EmbeddedDocumentField(UserProfile)
    worker_profile = me.EmbeddedDocumentField(WorkerProfile)
    seller_profile = me.EmbeddedDocumentField(SellerProfile)
    buyer_profile = me.EmbeddedDocumentField(BuyerProfile)
