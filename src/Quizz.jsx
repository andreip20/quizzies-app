import React, { useState } from "react";
import { useEffect } from "react";
import Question from "./Question";
import "./Quizz.css";
import Completed from "./Completed";
import axios from "axios";

export default function Quizz() {
  const [data, setData] = useState([]);
  const url =
    "https://the-trivia-api.com/api/questions?categories=general_knowledge,science,music&limit=4&difficulty=easy";
  const [questions, setQuestions] = useState([]);
  const [allAnswered, setAllAnswered] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Called 2 times

    console.log("first useeffect busted");
    (async () => {
      try {
        const res = await axios.get(url);
        console.log("res", res);

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  //console.log(data[0].difficulty);

  useEffect(() => {
    //Called 4 times
    console.log("second useEffect called bitch ahh nigg");
    if (Array.isArray(data) && data.length !== 0) {
      const newQ = [];
      console.log("data", data);
      for (const [index, value] of data.entries()) {
        newQ.push({
          id: index,
          question: value.question,
          answers: [...value.incorrectAnswers, value.correctAnswer],
          selectedAnswer: false,
          correctAnswer: value.correctAnswer,
        });
      }
      setQuestions(newQ);
    }
  }, [data]);

  console.log("Rendered");

  function handleAnswer(questionId, answerId) {
    const indexOfQuestion = questions.findIndex((q) => q.id === questionId);

    const newQuestions = [
      ...questions.slice(0, indexOfQuestion),
      {
        ...questions[indexOfQuestion],
        selectedAnswer: questions[indexOfQuestion].answers[answerId],
      },
      ...questions.slice(indexOfQuestion + 1),
    ];

    setQuestions(newQuestions);
  }

  function handleSubmit() {
    //Here I check if the state is correct before I submit;

    for (let question of questions) {
      if (question.selectedAnswer) {
        setAllAnswered(true);
      } else {
        setAllAnswered(false);
        break;
      }
    }

    // Set correct answers;

    for (const question of questions) {
      if (question.selectedAnswer === question.correctAnswer) {
        setCount((count) => count + 1);
      }
    }
  }

  return (
    <>
      <div className={!allAnswered ? "quizz-container" : "none"}>
        {questions.map((q) => (
          <Question
            id={q.id}
            question={q.question}
            answers={q.answers}
            handleAnswer={handleAnswer}
            selectedAnswer={q.selectedAnswer}
            key={q.id}
          />
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Answers
        </button>
      </div>
      {allAnswered ? (
        <Completed
          setAllAnswered={setAllAnswered}
          count={count}
          setCount={setCount}
        />
      ) : null}
    </>
  );
}
