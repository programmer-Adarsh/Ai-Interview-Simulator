import { useContext } from "react";

import {
  InterviewContext
} from "../context/InterviewContext";

function ResultsPage() {

  const {
  questions,
  answers,
  feedbacks,
} = useContext(
  InterviewContext
);
const averageScore =
  feedbacks.reduce(
    (
      sum,
      item
    ) =>
      sum +
      item.score,
    0
  ) /
  feedbacks.length;

  const latestFeedback =
  feedbacks[feedbacks.length - 1];

  if (
  !feedbacks ||
  feedbacks.length === 0
) {

    return (
      <div className="p-10 text-white">
        No results found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-5xl font-bold mb-8">
        Results
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl">

        <div className="text-center mb-8">

  <div className="text-7xl font-bold text-cyan-400">
    {averageScore.toFixed(1)}
  </div>

  <p className="text-slate-400">
    Overall Score
  </p>

</div>

<div className="bg-slate-900 p-6 rounded-xl mb-8">

  <h2 className="text-2xl font-bold mb-4">
    Performance Summary
  </h2>

  <p>
    Average Score:
    {" "}
    {averageScore.toFixed(1)}
    /10
  </p>

  <p>
    Questions Answered:
    {" "}
    {questions.length}
  </p>

</div>

<div className="mt-10">

  <h2 className="text-3xl font-bold mb-6">
    Detailed Interview Report
  </h2>

  {questions.map(
    (
      question,
      index
    ) => (

      <div
        key={index}
        className="bg-slate-800 p-6 rounded-xl mb-6"
      >

        <h3 className="text-xl font-bold mb-3">
          Question {index + 1}
        </h3>

        <p className="mb-4">
          {question}
        </p>

        <h4 className="font-semibold">
          Your Answer
        </h4>

        <p className="mb-4">
          {answers[index]}
        </p>

        <h4 className="font-semibold">
          Score
        </h4>

        <p className="mb-4">
          {feedbacks[index]?.score}/10
        </p>

      </div>

    )
  )}

</div>

<div className="w-full bg-slate-700 rounded-full h-4 mb-8">

  <div
    className="bg-cyan-500 h-4 rounded-full"
    style={{
      width: `${averageScore * 10}%`,
    }}
  />

</div>
<div className="mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Interview History
  </h2>

  {feedbacks.map(
    (
      feedback,
      index
    ) => (

      <div
        key={index}
        className="bg-slate-800 p-4 rounded-xl mb-4"
      >

        <p>
          Question
          {" "}
          {index + 1}
        </p>

        <p>
          Score:
          {" "}
          {feedback.score}
        </p>

      </div>
    )
  )}

</div>
        <div className="mb-6">

          <h3 className="font-bold">
            Strengths
          </h3>
            <div className="mb-6">
              <h3 className="font-bold">
                Correctness
              </h3>

              <p>
                {
                  latestFeedback.correctness
                }
              </p>

            </div>

            <div className="mb-6">

              <h3 className="font-bold">
                Time Complexity
              </h3>

              <p>
                {
                  latestFeedback.time_complexity
                }
              </p>

            </div>

            <div className="mb-6">

              <h3 className="font-bold">
                Space Complexity
              </h3>

              <p>
                {
                  latestFeedback.space_complexity
                }
              </p>

            </div>
          <ul>
            {latestFeedback.strengths.map(
              (
                item,
                index
              ) => (
                <li key={index}>
                  • {item}
                </li>
              )
            )}
          </ul>

        </div>

        <div className="mb-6">

          <h3 className="font-bold">
            Weaknesses
          </h3>

          <ul>
            {latestFeedback.weaknesses.map(
              (
                item,
                index
              ) => (
                <li key={index}>
                  • {item}
                </li>
              )
            )}
          </ul>

        </div>

        <div>

          <h3 className="font-bold">
            Suggestions
          </h3>

          <ul>
            {latestFeedback.suggestions.map(
              (
                item,
                index
              ) => (
                <li key={index}>
                  • {item}
                </li>
              )
            )}
          </ul>

        </div>

      </div>

    </div>
  );
}

export default ResultsPage;