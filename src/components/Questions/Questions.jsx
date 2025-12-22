import React from "react";
import "./Questions.css";

const Questions = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="question-cnt">
      <div className="question" onClick={onClick}>
        <p className="question-text">{question}</p>
        <p className="question-sign">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
      <div className="ques-end" />
    </div>
  );
};

export default Questions;
