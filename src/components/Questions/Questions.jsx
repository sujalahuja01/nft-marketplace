import React from "react";
import "./Questions.css";

const Questions = ({ question, answer }) => {
  return (
    <div className="question-cnt">
      <div className="question">
        <p className="question-text">{question}</p>
        <p className="question-sign">+</p>
      </div>
      <div className="ques-end" />
    </div>
  );
};

export default Questions;
