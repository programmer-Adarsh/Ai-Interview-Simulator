from fastapi import APIRouter
from pydantic import BaseModel

from services.gemini_service import (
    generate_questions
)

from services.evaluation_service import (
    evaluate_answer
)

router = APIRouter()


class InterviewRequest(BaseModel):
    role: str
    difficulty: str
    type: str


@router.post(
    "/generate-question"
)
def generate(
    req: InterviewRequest
):

    questions = generate_questions(
        req.role,
        req.difficulty,
        req.type
    )

    return {
        "questions": questions
    }

class EvaluationRequest(
    BaseModel
):
    question: str
    answer: str
    language: str

@router.post(
    "/evaluate-answer"
)
def evaluate(
    req: EvaluationRequest
):

    result = evaluate_answer(
    req.question,
    req.answer,
    req.language
)

    return result