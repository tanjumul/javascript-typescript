import os
from google import genai
from google.genai import types

# Initialize client using the GEMINI_API_KEY environment variable
client = genai.Client()

# 1. Define a tool function for the agent
def get_current_weather(city: str) -> str:
    """Gets the current weather for a specified city.
    
    Args:
        city: The name of the city (e.g. Dhaka, Sylhet, Tokyo)
    """
    print(f"\n⚡ [AGENT ACTION]: Calling local tool 'get_current_weather' with city='{city}'...")
    # Mock return value (or integrate with a real weather API)
    return f"The weather in {city} is 24°C, mostly sunny with light breeze."

# 2. Call the model with the tool attached
print("🤖 Prompting Gemini Agent...")
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What is the weather right now in Sylhet?",
    config=types.GenerateContentConfig(
        tools=[get_current_weather],  # Passes the tool to the model
    ),
)

# 3. Print the final synthesized response
print("\n📝 [AGENT RESPONSE]:")
print(response.text)