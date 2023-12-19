import React from "react";
import {useState, useRef} from 'react';
import {Link} from "react-router-dom";


function TimerPage() {

//     const [startTime, setStartTime] = useState(null);
//     const [now, setNow] = useState(null);
//     const intervalRef = useRef(null);
//
//     function handleStart() {
//         setStartTime(Date.now());
//         setNow(Date.now());
//
//         clearInterval(intervalRef.current);
//         intervalRef.current = setInterval(() => {
//             setNow(Date.now());
//         }, 10);
//     }
//
//     function handleStop() {
//         clearInterval(intervalRef.current);
//     }
//
//     let secondsPassed = 0;
//     if (startTime != null && now != null) {
//         secondsPassed = (now - startTime) / 1000;
//     }
//
//
//     return (
//         <>
//             <div>
//                 <div className={'timer'}>
//                     <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//                     <button onClick={handleStart}>
//                         Start
//                     </button>
//                     <button onClick={handleStop}>
//                         Stop
//                     </button>
//
//                 </div>
//                 <Link to="/"><span className="e1_6">Моя лента</span></Link>
//             </div>
//
//         </>
//     );
// }

    const initialTime = 1800; // Initial time in seconds (25 minutes)
    const [time, setTime] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const handleStartStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now();
            intervalRef.current = setInterval(() => {
                const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                if (time - elapsedTime <= 0) {
                    clearInterval(intervalRef.current);
                    setTime(0);
                    setIsRunning(false);
                    alert("Пора отдохнуть!");
                } else {
                    setTime(time - elapsedTime);
                }
            }, 1000);
        }
        setIsRunning(!isRunning);
    };


    const handleStartOver = () => {
        clearInterval(intervalRef.current);
        setTime(initialTime);
        setIsRunning(false);
    };

    return (

        <>
            <Link to="/"><span className="e1_6">Моя лента</span></Link>
            <div className="container p-3 timer">
                <h1 className=" d-flex justify-content-center align-items-center mx-2">Pomodoro Timer</h1>
                <div className="d-flex justify-content-center align-items-center">

                    <h1 className={"mx-2"}>Осталось времени: {formatTime(time)}</h1>

                </div>

                <div className="d-flex mt-3 justify-content-center">
                    <button type="button" className={"btn btn-primary mx-2"}
                            onClick={handleStartStop}>{isRunning ? 'Стоп' : 'Старт'}</button>
                    <button type="button" className={"btn btn-secondary mx-2"} onClick={handleStartOver}>Начать заново
                    </button>
                </div>
            </div>
        </>
    );
}

export default TimerPage;