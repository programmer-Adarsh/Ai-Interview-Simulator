# AI Interview Simulator

An AI-powered interview preparation platform that simulates real technical interviews, evaluates candidate responses, and provides actionable feedback to help users improve their interview performance.

---

## Overview

Preparing for technical interviews often requires mentors, peers, or expensive platforms. This project aims to provide an accessible AI interviewer that can conduct mock interviews, generate role-specific questions, evaluate responses, and provide detailed performance feedback.

The platform supports multiple interview categories including:

* DSA Interviews
* HR Interviews
* CS Fundamentals
* Technical Discussions

Users can configure interview parameters such as role, difficulty level, and interview type before starting a multi-round interview session.

---

## Features

### Multi-Round Interview Flow

* Generate multiple interview questions in a single session
* Track interview progress
* Navigate through multiple rounds seamlessly

### AI-Powered Question Generation

* Generates role-specific interview questions
* Supports different difficulty levels
* Produces LeetCode-style coding questions for DSA interviews

### AI Evaluation System

Evaluates candidate responses on:

* Correctness
* Communication
* Clarity
* Problem-Solving Approach
* Technical Understanding

Provides:

* Score
* Strengths
* Weaknesses
* Improvement Suggestions

### DSA Coding Mode

For DSA interviews:

* Language selection
* Code-editor style interface
* AI-based code review
* Complexity analysis feedback

### Results Dashboard

Displays:

* Overall Interview Score
* Individual Question Scores
* Strengths
* Weaknesses
* Suggestions
* Interview History

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* React Router

### Backend

* FastAPI
* Python

### AI

* Google Gemini API

### State Management

* React Context API

---

## Project Structure

frontend/

├── src/

│ ├── components/

│ ├── pages/

│ ├── services/

│ ├── context/

│ └── App.jsx

│

├── backend/

│ ├── routes/

│ ├── services/

│ ├── prompts/

│ └── main.py

---

## Application Flow

User Selects Configuration

↓

AI Generates Questions

↓

Interview Session

↓

Answer Submission

↓

AI Evaluation

↓

Results Dashboard

---

## Key Technical Challenges

### Prompt Engineering

Designed structured prompts to:

* Generate role-specific interview questions
* Generate LeetCode-style DSA problems
* Produce structured evaluation feedback
* Return machine-readable JSON responses

### State Management

Managed interview state across:

* Questions
* Answers
* Feedback
* Interview Progress

using React Context API.

### AI Response Parsing

Handled AI-generated JSON outputs and converted them into structured feedback for the frontend dashboard.

---

## Future Improvements

* Company-Specific Interviews (Google, Amazon, Microsoft, Meta)
* Adaptive Difficulty Adjustment
* PDF Interview Reports
* Voice-Based Interviews
* Interview Analytics Dashboard
* Collaborative Whiteboard
* System Design Interview Mode
* Authentication and Interview History Storage

---


## Author

Adarsh

B.Tech Student, IIT Roorkee

Interested in Software Development, AI, and Full Stack Engineering.

