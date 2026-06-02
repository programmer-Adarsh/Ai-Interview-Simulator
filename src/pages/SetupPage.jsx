import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterviewContext } from "../context/InterviewContext";
import API from "../services/api";

function SetupPage() {
  const navigate = useNavigate();

  const {
  setInterviewConfig,
  setQuestions,
  setAnswers,
  setFeedbacks,
  setCurrentQuestionIndex,
} = useContext(
  InterviewContext
);

  const [role, setRole] = useState("SDE Intern");
  const [difficulty, setDifficulty] = useState("Medium");
  const [type, setType] = useState("DSA");
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {

  setLoading(true);

  try {

    setInterviewConfig({
      role,
      difficulty,
      type,
    });

    const response =
      await API.post(
        "/generate-question",
        {
          role,
          difficulty,
          type,
        }
      );

    setQuestions(
  response.data.questions
);
    console.log(
  "Generated Question:",
  response.data.question
);

    navigate("/interview");

  } catch (error) {

    console.error(error);

    alert(
      "Failed to generate question"
    );

  } finally {

    setLoading(false);

  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">

      <div className="bg-slate-900 p-10 rounded-2xl w-full max-w-xl">

        <h1 className="text-4xl font-bold mb-8">
          Interview Setup
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block mb-2">
              Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option>SDE Intern</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Interview Type
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="w-full p-3 rounded-lg bg-slate-800"
            >
              <option>DSA</option>
              <option>CS Fundamentals</option>
              <option>HR</option>
              <option>Project Discussion</option>
            </select>
          </div>

          <button
  onClick={handleStart}
  disabled={loading}
  className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl"
>
  {loading
    ? "Generating Question..."
    : "Start Interview"}
</button>

        </div>
      </div>
    </div>
  );
}

export default SetupPage;