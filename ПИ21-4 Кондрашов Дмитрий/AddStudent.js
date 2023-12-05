import { useState } from 'react';

export default function AddStudent({ onAddStudent }) {
    const [title, setTitle] = useState('');
    const [score, setScore] = useState('');
    const [passes, setPasses] = useState('');
    return (
        <>
            <input
                placeholder="Имя студента"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type={"number"}
                placeholder="Средний балл"
                value={score}
                onChange={(e) => setScore(parseInt(e.target.value))}
            />
            <input
                type={"number"}
                placeholder="Количество пропусков"
                value={passes}
                onChange={(e) => setPasses(parseInt(e.target.value))}
            />
            <button
                onClick={() => {
                    setTitle('');
                    setScore(0);
                    setPasses(0);
                    onAddStudent(title, score, passes);
                }}
            >
                Add
            </button>
        </>
    );
}