import random
import string
from ..rstr import Rstr
from random import SystemRandom
import hashlib

rs = Rstr(SystemRandom())


def GenerateRandomPassword():

    passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$'
    filtered = ''
    filtered = filtered.join(random.choice(string.ascii_uppercase) for i in range(2))
    filtered = filtered.join(random.choice(string.ascii_lowercase) for i in range(2))
    filtered = filtered.join(random.choice(string.digits) for i in range(2))
    filtered = filtered.join(random.choice("$!%*?#&") for i in range(2))
    pwd = ''.join(random.choice(filtered) for i in range(10))
    return pwd


def GenerateHash(string):
    return hashlib.md5(string.encode('utf-8')).hexdigest()


def GenerateAuthCode():

    filtered = '0123456789'
    code = ''.join(random.choice(filtered) for i in range(6))
    return code