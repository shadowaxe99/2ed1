```python
import requests

class BrandSearchAPI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://brandsearchapi.example.com"  # Replace with actual API base URL

    def search_brands(self, query):
        headers = {
            "Authorization": f"Bearer {self.api_key}"
        }
        params = {
            "query": query
        }
        response = requests.get(f"{self.base_url}/search", headers=headers, params=params)
        return response.json()

brand_search = BrandSearchAPI("your_api_key")  # Replace with actual API key
```
