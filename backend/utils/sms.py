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
         from_='MG55c36834afca2a2ff19b09370c48ceb6',
         to=to
     )
    print(body, to, message.sid)
    return message.sid