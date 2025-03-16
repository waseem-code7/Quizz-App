import { useEffect, useState } from "react";

function QuestionTimer({ time, handleTimeout }) {

    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        console.log("Inside Timeout")
        const id = setTimeout(handleTimeout, time);
        return () => {
            clearTimeout(id);
        }
    }, [handleTimeout, time]);


    useEffect(() => {
        console.log("Inside Interval")
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <progress max={time} value={remainingTime} />

}

export default QuestionTimer;