import os
import json

from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv(
        "GEMINI_API_KEY"
    )
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def evaluate_answer(
    question,
    answer,
    language
):

    prompt = f"""
You are a senior FAANG interviewer.

Problem:

{question}

Programming Language:

{language}

Candidate Solution:

{answer}

Evaluate the solution.

Return ONLY valid JSON.

Format:

{{
  "score": 8,
  "correctness": "...",
  "time_complexity": "...",
  "space_complexity": "...",
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "suggestions": [
    "...",
    "..."
  ]
}}

Do not write anything outside JSON.
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