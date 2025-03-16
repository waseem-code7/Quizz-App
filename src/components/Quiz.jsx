import { useState, useCallback } from "react";
import questions from "./questions";
import QuestionAnswer from "./QuestionAnswer";
import Summary from "./Summary";

function Quiz() {
    
    const [answers, setAnswers] = useState([]);
    const questionIndex = answers.length;

    const handleAnswerSelect = useCallback(function(answer) {
        setAnswers((prevAnswers) => {
            return [...prevAnswers, answer];
        })
    }, []);

    const handleTimeOut = useCallback(function() {
        handleAnswerSelect(null);
    }, [handleAnswerSelect]);

    if(questionIndex === questions.length) {
        return (
            <Summary userAnswers={answers} />
        )
    }

    return (
        <div id="quiz">
            <div id="question">
                <QuestionAnswer key={questionIndex} questionIndex={questionIndex} handleTimeOut={handleTimeOut} handleAnswerSelectProp={handleAnswerSelect}  />
            </div>
        </div>
    )
}

export default Quiz;