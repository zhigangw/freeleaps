import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

def SendSms(body, to):
    message = client.messages \
    .create(
         body=body,
         from_="+16898887156",
         messaging_service_sid='MG55c36834afca2a2ff19b09370c48ceb6',
         to=to
     )
    return message.status

def SendTestSms():
    SendSms("hello", "+14252099984")