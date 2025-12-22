import React from "react";
import "./FAQ.css";
import { questions } from "../../constants/content";
import Questions from "../../components/Questions/Questions";

const FAQ = () => {
  return (
    <section className="container faq-cnt">
      <div className="faq-text">
        <h2 className="faq-head">Frequently Asked Question</h2>
        <p className="faq-para">Wanna Ask Something?</p>
      </div>
      <div className="faqs">
        {questions.map((ques) => (
          <Questions key={ques.id} {...ques} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
