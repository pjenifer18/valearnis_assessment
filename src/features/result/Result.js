import React from "react";
import { useSelector } from "react-redux";
import check from "../../assets/images/thankyou-check.png"

const Result = () => {
    const state = useSelector(state => state.questions)
    const getScore = () => {
        let count = 0;
        state.questions.forEach((question, index) => {
            question.selectedAnswer === question.correctAnswer && count++;
        })
        return `${count} / ${state.questions.length}`;
    }
  return (
    <div className="thankyou-page-inner">
      <img src={check} alt="" />
      <span>Your score is {getScore()}</span>
      <h1>Thankyou For Your Response!</h1>
    </div>
  );
};

export default Result;
