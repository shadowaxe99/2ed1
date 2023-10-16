```python
import firebase_admin
from firebase_admin import firestore

# Initialize Firestore DB
cred = firebase_admin.credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def add_influencer(influencer_id, influencer_data):
    db.collection('influencers').document(influencer_id).set(influencer_data)

def get_influencer(influencer_id):
    return db.collection('influencers').document(influencer_id).get().to_dict()

def update_influencer(influencer_id, influencer_data):
    db.collection('influencers').document(influencer_id).update(influencer_data)

def delete_influencer(influencer_id):
    db.collection('influencers').document(influencer_id).delete()

def add_brand(brand_id, brand_data):
    db.collection('brands').document(brand_id).set(brand_data)

def get_brand(brand_id):
    return db.collection('brands').document(brand_id).get().to_dict()

def update_brand(brand_id, brand_data):
    db.collection('brands').document(brand_id).update(brand_data)

def delete_brand(brand_id):
    db.collection('brands').document(brand_id).delete()
```