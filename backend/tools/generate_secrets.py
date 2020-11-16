import secrets
length = 40
generated_key = secrets.token_urlsafe(length)
print(generated_key)