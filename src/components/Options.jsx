import { useRef } from "react";

function Options({options, handleSelectAnswerProp, answered, currentSelectedAnswer}) {
    const optionsRef = useRef();
    
    if(!optionsRef.current) {
        optionsRef.current = options.sort(() => Math.random() - 0.5);
    }

    function handleAnswerSelect(answer) {
        handleSelectAnswerProp(answer);
    }

    return (
        <ul id="answers">
            {optionsRef.current.map(function (answer) {
                let className = "";
                const selectedAnswer = currentSelectedAnswer;
                const isSelectedAnswer = selectedAnswer === answer;

                if (isSelectedAnswer && answered === "answered") {
                    className += " selected"
                } else if (isSelectedAnswer && answered === "correct") {
                    className += " correct"
                } else if (isSelectedAnswer && answered === "wrong") {
                    className += " wrong"
                }
                return (
                    <li key={answer} className="answer">
                        <button onClick={() => handleAnswerSelect(answer)} className={className} disabled={answered.length > 0}>
                            {answer}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Options;