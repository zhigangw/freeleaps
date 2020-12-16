from pymongo import MongoClient
import requests
from .replace_records import replace_records

def update_countries():
    r = requests.get('https://restcountries.eu/rest/v2/all')

    replace_records('country_doc', r.json())
