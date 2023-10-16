```python
from fastapi import FastAPI
from firebase_admin import initialize_app, credentials
from firebase_admin import firestore, auth
from pydantic import BaseModel

# Initialize Firebase
cred = credentials.Certificate("path/to/serviceAccountKey.json")
initialize_app(cred)

# Initialize Firestore and Auth
db = firestore.client()
auth = auth.client()

# Initialize FastAPI
app = FastAPI()

class User(BaseModel):
    name: str
    email: str
    preferences: dict

@app.post("/user/")
async def create_user(user: User):
    doc_ref = db.collection('users').document(user.email)
    doc_ref.set(user.dict())
    return {"message": "User created successfully"}

@app.get("/user/{user_id}")
async def read_user(user_id: str):
    doc_ref = db.collection('users').document(user_id)
    try:
        doc = doc_ref.get()
        return doc.to_dict()
    except Exception as e:
        return {"error": str(e)}

@app.put("/user/{user_id}")
async def update_user(user_id: str, user: User):
    doc_ref = db.collection('users').document(user_id)
    doc_ref.update(user.dict())
    return {"message": "User updated successfully"}

@app.delete("/user/{user_id}")
async def delete_user(user_id: str):
    db.collection('users').document(user_id).delete()
    return {"message": "User deleted successfully"}
```