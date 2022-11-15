import React from "react";

export default function Question({
  id,
  question,
  answers,
  handleAnswer,
  selectedAnswer,
}) {
  return (
    <div className="question">
      <h1>{question}</h1>
      <div className="question-buttons">
        {answers.map((a, index) => (
          <button
            key={index}
            className={
              selectedAnswer === a ? "question-btn-active" : "question-btn"
            }
            onClick={() => handleAnswer(id, index)}>
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
