```python
from openai import GPT3LM

class OpenAIModel:
    def __init__(self):
        self.model = GPT3LM()

    def generate_idea(self, brand, influencer):
        prompt = f"{brand} and {influencer} collaboration"
        idea = self.model.generate(prompt)
        return idea

    def match_brand_influencer(self, brand, influencer):
        prompt = f"How well does {brand} match with {influencer}?"
        match_score = self.model.generate(prompt)
        return match_score
```