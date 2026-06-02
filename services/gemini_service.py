import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

import json


def generate_questions(
    role,
    difficulty,
    interview_type
):

    prompt = f"""
    You are a FAANG interviewer.

    Generate EXACTLY 3 interview questions.

    Role:
    {role}

    Difficulty:
    {difficulty}

    Type:
    {interview_type}

    If Type is DSA,
    generate LeetCode-style questions.

    Return ONLY a JSON array.

    Example:

    [
      "Question 1",
      "Question 2",
      "Question 3"
    ]
    """

    response = model.generate_content(
        prompt
    )

    text = response.text.strip()

    text = text.replace(
        "```json",
        ""
    )

    text = text.replace(
        "```",
        ""
    )

    return json.loads(text)