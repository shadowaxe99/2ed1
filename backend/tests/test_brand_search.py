```python
import pytest
from fastapi.testclient import TestClient
from backend.fastapi.server import app
from backend.third_party_apis.brand_search import search_brands

client = TestClient(app)

def test_search_brands():
    response = client.get("/search_brands?query=adidas")
    assert response.status_code == 200
    assert "adidas" in response.json()

@pytest.fixture
def brand_search():
    return search_brands("nike")

def test_brand_search(brand_search):
    assert brand_search is not None
    assert "nike" in brand_search
```