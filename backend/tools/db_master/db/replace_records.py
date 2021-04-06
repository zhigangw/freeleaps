from pymongo import MongoClient


def replace_records(collection, r):
    client = MongoClient()
    db = client.freeleaps

    doc = db[collection]

    modified = 0
    matched = 0
    processed = 0
    acknowledged = 0
    num_records = doc.count_documents({})
    for c in r:
        if "name" in c:
            result = doc.replace_one(
                {"name": c['name']}, c, upsert=True, bypass_document_validation=True)   
                
            matched += result.matched_count     
            modified += result.modified_count
        elif "id" in c:
            result = doc.replace_one(
                {"id": c['id']}, c, upsert=True, bypass_document_validation=True)      
                
            matched += result.matched_count          
            modified += result.modified_count
        else:
            result = doc.insert_one(c)

        processed += 1
        acknowledged += 1 if result.acknowledged else 0

    current_num_records = doc.count_documents({})
    print("collection:", collection)
    print("processed:", processed)
    print("acknowledged:", acknowledged)
    print("modified:", modified)
    print("matched:", matched)
    print("num_records:", num_records, current_num_records)
