```python
import pytest
from firebase_admin import firestore
from backend.firebase.firestore import database

def test_get_influencer_profile():
    # Assuming we have a function get_influencer_profile in database.py
    profile = database.get_influencer_profile("test_influencer_id")
    assert isinstance(profile, dict)
    assert "name" in profile
    assert "preferences" in profile

def test_get_brand_data():
    # Assuming we have a function get_brand_data in database.py
    brand_data = database.get_brand_data("test_brand_id")
    assert isinstance(brand_data, dict)
    assert "name" in brand_data
    assert "industry" in brand_data

def test_update_influencer_profile():
    # Assuming we have a function update_influencer_profile in database.py
    updated_profile = database.update_influencer_profile("test_influencer_id", {"name": "New Name"})
    assert updated_profile["name"] == "New Name"

def test_update_brand_data():
    # Assuming we have a function update_brand_data in database.py
    updated_brand_data = database.update_brand_data("test_brand_id", {"name": "New Brand Name"})
    assert updated_brand_data["name"] == "New Brand Name"
```