import { createContext, useState } from "react";

export const InterviewContext = createContext();

export function InterviewProvider({ children }) {

  const [interviewConfig, setInterviewConfig] =
    useState({
      role: "",
      difficulty: "",
      type: "",
    });

  const [questions, setQuestions] =
    useState([]);
  const [answers, setAnswers] = useState([]);
  const [feedbacks, setFeedbacks] =
  useState([]);
  
  const [currentQuestionIndex,
        setCurrentQuestionIndex]
        = useState(0);

  return (
    <InterviewContext.Provider
     value={{
  interviewConfig,
  setInterviewConfig,

  questions,
  setQuestions,

  answers,
  setAnswers,

  feedbacks,
  setFeedbacks,

  currentQuestionIndex,
  setCurrentQuestionIndex,
}}
    >
      {children}
    </InterviewContext.Provider>
  );
}