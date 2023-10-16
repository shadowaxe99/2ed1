```python
import pytest
from firebase_admin import auth
from backend.firebase.auth.authentication import FirebaseAuthentication

def test_firebase_authentication():
    firebase_auth = FirebaseAuthentication()

    # Test user creation
    user = firebase_auth.create_user(email="test@test.com", password="test123")
    assert user.email == "test@test.com"

    # Test user retrieval
    retrieved_user = firebase_auth.get_user(user.uid)
    assert retrieved_user.uid == user.uid

    # Test user deletion
    firebase_auth.delete_user(user.uid)
    with pytest.raises(auth.UserNotFoundError):
        firebase_auth.get_user(user.uid)
```