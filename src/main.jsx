import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { InterviewProvider } from "./context/InterviewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InterviewProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InterviewProvider>
  </React.StrictMode>
);