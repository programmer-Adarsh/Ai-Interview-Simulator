import { useContext, useState } from "react";
import { InterviewContext } from "../context/InterviewContext";
import API from "../services/api";
import {
  useNavigate
} from "react-router-dom";

function InterviewPage() {
  const {
  interviewConfig,

  questions,
  setQuestions,

  answers,
  setAnswers,

  feedbacks,
  setFeedbacks,

  currentQuestionIndex,
  setCurrentQuestionIndex,
  
} = useContext(
  InterviewContext
);
const currentQuestion =
  questions[currentQuestionIndex];

console.log("Questions:", questions);
console.log(
  "Current Index:",
  currentQuestionIndex
);
console.log(
  "Current Question:",
  currentQuestion
);

  const [answer, setAnswer] = useState("");
  const [language, setLanguage] =
useState("C++");
  const navigate =
  useNavigate();
  const [evaluating, setEvaluating] = useState(false);

const handleSubmit = async () => {

  setEvaluating(true);

  try {

    const updatedAnswers = [
      ...answers,
      answer,
    ];

    setAnswers(
      updatedAnswers
    );

    const response =
      await API.post(
  "/evaluate-answer",
  {
    question: currentQuestion,
    answer,
    language:
      interviewConfig.type === "DSA"
        ? language
        : "",
  }
);
    const updatedFeedbacks = [
      ...feedbacks,
      response.data,
    ];

    setFeedbacks(
      updatedFeedbacks
    );

    if (
  currentQuestionIndex < 2
) {

  setCurrentQuestionIndex(
    currentQuestionIndex + 1
  );

  setAnswer("");

} else {

  navigate("/results");

}

  } catch (error) {

    console.error(error);

    alert(
      "Evaluation failed"
    );

  } finally {

    setEvaluating(false);

  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Interview Session
      </h1>

      <div className="bg-slate-900 rounded-xl p-6 mb-8">

        <p>
          <strong>Role:</strong>{" "}
          {interviewConfig.role}
        </p>

        <p>
          <strong>Difficulty:</strong>{" "}
          {interviewConfig.difficulty}
        </p>

        <p>
          <strong>Type:</strong>{" "}
          {interviewConfig.type}
        </p>

      </div>

      <div className="mb-4 text-cyan-400">

  Question {currentQuestionIndex + 1} of 3

</div>

<div className="bg-slate-900 rounded-xl p-6">

  <h2 className="text-2xl font-semibold mb-4">
    Question
  </h2>

  <p className="text-slate-300 mb-6">
    {currentQuestion}
  </p>

{
  interviewConfig.type === "DSA" && (
    <div className="mb-4">

      <label className="block mb-2">
        Language
      </label>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(
            e.target.value
          )
        }
        className="bg-slate-800 p-3 rounded-xl"
      >

        <option>C++</option>
        <option>Java</option>
        <option>Python</option>
        <option>JavaScript</option>

      </select>

    </div>
  )
}

<textarea
  value={answer}
  onChange={(e) =>
    setAnswer(e.target.value)
  }
  placeholder={
    interviewConfig.type === "DSA"
      ? "Write your code here..."
      : "Type your answer here..."
  }
  className={
    interviewConfig.type === "DSA"
      ? "w-full h-80 bg-black text-green-400 font-mono rounded-xl p-4 outline-none"
      : "w-full h-40 bg-slate-800 rounded-xl p-4 outline-none"
  }
/>

<button
  onClick={handleSubmit}
  disabled={evaluating}
  className="mt-4 bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl"
>
  {evaluating
    ? "Evaluating..."
    : "Submit Answer"}
</button>

      </div>

    </div>
  );
}

export default InterviewPage;