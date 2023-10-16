```python
import pytest
from fastapi.testclient import TestClient
from backend.fastapi.server import app
from backend.third_party_apis.analytics import getAnalytics

client = TestClient(app)

def test_get_analytics():
    response = client.get("/analytics")
    assert response.status_code == 200
    assert "data" in response.json()

def test_analytics_data():
    data = getAnalytics()
    assert isinstance(data, dict)
    assert "totalUsers" in data
    assert "activeUsers" in data
    assert "brandEngagementRate" in data
    assert "averagePartnershipScore" in data
```
