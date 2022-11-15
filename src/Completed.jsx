import React, { useState } from "react";
import { useEffect } from "react";
export default function Completed(props) {
  function set() {
    props.setCount(0);
    window.location.reload(false);
  }

  return (
    <div className="completed-container">
      <h1>Completed!</h1>
      <h3>You have answered {props.count}/4 questions correctly!</h3>
      <ul className="corr-ans"></ul>
      <button className="try-again" onClick={set}>
        Try Another Quizz
      </button>
    </div>
  );
}
