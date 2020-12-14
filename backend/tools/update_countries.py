from pymongo import MongoClient
import requests
import json
client = MongoClient()
db = client.freeleaps
r = requests.get('https://restcountries.eu/rest/v2/all')
modified = 0
matched = 0
processed = 0
acknowledged = 0
num_records = db.country_doc.count_documents({})
for c in r.json():
    result = db.country_doc.replace_one(
        {"name": c['name']}, c, upsert=True, bypass_document_validation=True)
    processed += 1
    modified += result.modified_count
    matched += result.matched_count
    acknowledged += 1 if result.acknowledged else 0

current_num_records = db.country_doc.count_documents({})
print("processed:", processed)
print("acknowledged:", acknowledged)
print("modified:", modified)
print("matched:", matched)

print("num_records:", num_records, current_num_records)
