```python
from fastapi.testclient import TestClient
from backend.fastapi.server import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the AI Agent-powered Platform for Influencer-Brand Collaborations"}

def test_get_influencer_profile():
    response = client.get("/influencer/{influencer_id}")
    assert response.status_code == 200
    assert "influencer" in response.json()

def test_get_brand_data():
    response = client.get("/brand/{brand_id}")
    assert response.status_code == 200
    assert "brand" in response.json()

def test_match_brands():
    response = client.get("/match/{influencer_id}")
    assert response.status_code == 200
    assert "matches" in response.json()

def test_send_email():
    response = client.post("/email/{brand_id}")
    assert response.status_code == 200
    assert response.json() == {"message": "Email sent successfully"}

def test_generate_pitch_deck():
    response = client.get("/pitch_deck/{partnership_id}")
    assert response.status_code == 200
    assert "pitch_deck" in response.json()

def test_get_analytics():
    response = client.get("/analytics")
    assert response.status_code == 200
    assert "analytics" in response.json()

def test_ensure_security():
    response = client.get("/security")
    assert response.status_code == 200
    assert "security_status" in response.json()
```