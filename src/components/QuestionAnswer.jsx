import questions from "./questions";
import QuestionTimer from "./QuestionTimer";
import Options from "./Options";
import { useState } from "react";

function QuestionAnswer({ questionIndex, handleTimeOut, handleAnswerSelectProp }) {

    const [answerContext, setAnswerContext] = useState({
        answer: '',
        isCorrect: null
    });

    const handleSelectedAnswer = function (answer) {
        setAnswerContext({ answer: answer, isCorrect: null })

        setTimeout(() => {
            setAnswerContext((prevContext) => {
                return {
                    ...prevContext,
                    isCorrect: questions[questionIndex].answers[0] === answer
                }
            });

            setTimeout(() => {
                setAnswerContext({
                    answer: '',
                    isCorrect: null
                });
                handleAnswerSelectProp(answer);
            }, 1000);

        }, 1000);
    };

    let answered = "";
    let timer = 8000;

    if(answerContext.answer && answerContext.isCorrect === true) {
        answered = "correct";
        timer = 1000;
    } else if (answerContext.answer && answerContext.isCorrect === false) {
        answered = "wrong";
        timer = 1000;
    } else if(answerContext.answer) {
        answered = "answered";
        timer = 1000;
    }

    return (
        <>
            <QuestionTimer key={timer} time={timer} handleTimeout={answerContext.answer.length > 0 ? (() => {}) : handleTimeOut} />
            <h2>{questions[questionIndex].text}</h2>
            <Options options={[...questions[questionIndex].answers]} handleSelectAnswerProp={handleSelectedAnswer} answered={answered} currentSelectedAnswer={answerContext.answer} />
        </>
    )
}

export default QuestionAnswer;
