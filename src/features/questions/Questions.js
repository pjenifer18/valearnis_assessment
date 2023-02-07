import React, { useEffect, useState } from "react";
import "../../assets/css/custom.css";
import { api } from "../../app/services/baseApiSetup";
import { setQuestions, setSelectedOption } from "./questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const [index, setIndex] = useState(0);
  const [getQuestions] = api.useLazyGetQuestionsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions } = useSelector((state) => state.questions);
  useEffect(() => {
    getQuestions()
      .unwrap()
      .then((questions) => {
        dispatch(setQuestions(questions));
      });
  }, []);
  const handleNext = () => {
    index !== questions.length - 1 && setIndex((state) => state + 1);
  };
  const handlePrev = () => {
    index !== 0 && setIndex((state) => state - 1);
  };
  const handleSubmit = () => {
    navigate("/result")
  }
  const handleSelection = (e, optionIndex) => {
    if (e.target.checked) {
      dispatch(
        setSelectedOption({
          index,
          selectedAnswer: e.target.value,
          optionIndex,
          checked: true,
        })
      );
    } else {
      dispatch(
        setSelectedOption({
          index,
          selectedAnswer: "",
          optionIndex,
          checked: false,
        })
      );
    }
  };
  return (
    <section className="steps" id="step">
      <div className="container">
        <div className="mx-auto col-md-12 col-lg-7">
          <form id="steps" className="show-section" method="post">
            {/* step-1 */}
            <section className="steps-inner pop-slide" id="step-1">
              <div className="wrapper">
                <div className="step-heading">
                  <h2>Quiz</h2>
                  <p>Fill out this Trivia quiz for fun!</p>
                </div>
                <div className="step-bar">
                  <span className="step-counter">{`Question ${index + 1} / ${
                    questions?.length
                  }`}</span>
                  <div className="step-bar-inner">
                    <div
                      className={`step-bar-move step-move`}
                      style={{
                        width: `${Math.ceil(
                          ((index + 1) / questions.length) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
                <div style={{ paddingBottom: "35px" }}>
                  <div className="form-heading">
                    {questions[index]?.question}
                  </div>
                  <div className="form-inner">
                    {questions[index]?.options?.map((option, index) => {
                      return (
                        <label className="form-input">
                          <input
                            type="radio"
                            name="work"
                            value={option.value}
                            onChange={(e) => handleSelection(e, index)}
                            checked={option.checked}
                          />
                          {option.value}
                        </label>
                      );
                    })}
                  </div>
                  {/* next-prev-btn */}
                  <div className="form-buttons">
                    {index > 0 && (
                      <button type="button" class="prev" onClick={handlePrev}>
                        <i class="fa-solid fa-arrow-left"></i>last question
                      </button>
                    )}
                    {index !== questions?.length - 1 ? (
                      <button
                        type="button"
                        className="next"
                        onClick={handleNext}
                      >
                        next question
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="next"
                        onClick={handleSubmit}
                      >
                        Submit
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StartQuiz;
