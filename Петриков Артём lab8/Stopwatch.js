import React, { useState, useEffect, useRef } from 'react';

const StartButton = ({ onStart }) => {
    return (
        <button className={'StopwatchButton'} onClick={onStart}>
            Продолжить чтение
        </button>
    );
};

const StopButton = ({ onStop }) => {
    return (
        <button className={'StopwatchButton'} onClick={onStop}>
            Отдохнуть
        </button>
    );
};

const Stopwatch = () => {
    const startTimeRef = useRef(null);
    const intervalRef = useRef(null);
    const [now, setNow] = useState(null);

    useEffect(() => {
        handleStart();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    function handleStart() {
        startTimeRef.current = Date.now();
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    let secondsPassed = 0;
    if (startTimeRef.current != null && now != null) {
        secondsPassed = (now - startTimeRef.current) / 1000;
    }

    return (
        <div className="nav-item">
            <div className={'Stopwatch'}>
                <h1 className={'StopwatchH1'}>
                    Время чтения: {formatTime(secondsPassed)}
                    <br/><br/>
                    <StartButton onStart={handleStart} />
                    <br/><br/>
                    <StopButton onStop={handleStop} />
                </h1>
            </div>
        </div>
    );
};

export default Stopwatch;
