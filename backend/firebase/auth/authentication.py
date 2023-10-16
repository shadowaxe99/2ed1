```python
import firebase_admin
from firebase_admin import auth

# Initialize the Firebase Admin SDK
firebase_admin.initialize_app()

def create_user(email, password):
    try:
        user = auth.create_user(
            email=email,
            password=password,
        )
        return f'Successfully created new user: {user.uid}'
    except Exception as e:
        return f'Error creating new user: {e}'

def delete_user(uid):
    try:
        auth.delete_user(uid)
        return f'Successfully deleted user: {uid}'
    except Exception as e:
        return f'Error deleting user: {e}'

def verify_id_token(id_token):
    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token
    except Exception as e:
        return f'Error verifying ID token: {e}'
```