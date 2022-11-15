import { useState } from "react";
import "./Container.css";
import IntroPage from "./IntroPage";
import Quizz from "./Quizz";

export default function Container() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive((prevAct) => !prevAct);
  }

  if (!active) {
    return (
      <div className="main">
        <Quizz />
      </div>
    );
  }

  return (
    <div className="main">
      {active && <IntroPage />}
      {active && (
        <button className="intro-btn" onClick={handleClick}>
          Start Quizz
        </button>
      )}
    </div>
  );
}
