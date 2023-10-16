```python
import requests

class AnalyticsAPI:
    def __init__(self, base_url):
        self.base_url = base_url

    def get_analytics(self, influencer_id):
        response = requests.get(f"{self.base_url}/analytics/{influencer_id}")
        return response.json()

    def update_analytics(self, influencer_id, data):
        response = requests.put(f"{self.base_url}/analytics/{influencer_id}", json=data)
        return response.json()

analytics = AnalyticsAPI("https://third-party-analytics-api.com")
```