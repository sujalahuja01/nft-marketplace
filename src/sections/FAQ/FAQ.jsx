import React, { useState } from "react";
import "./FAQ.css";
import { questions } from "../../utils/content";
import Questions from "../../components/Questions/Questions";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const handleAnswer = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <section className="container faq-cnt">
      <div className="faq-text">
        <h2 className="faq-head">Frequently Asked Question</h2>
        <p className="faq-para">Wanna Ask Something?</p>
      </div>
      <div className="faqs">
        {questions.map((ques) => (
          <Questions
            key={ques.id}
            {...ques}
            isOpen={activeId === ques.id}
            onClick={() => handleAnswer(ques.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
