import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [attendance, setAttendance] = useState('');

    return (
        <>
            <p className={"AddStudent"}>Добавить студента</p>
            <input
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Оценка"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <input
                placeholder="Присутствие"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
            />
            <button
                onClick={() => {
                    setName('');
                    setGrade('');
                    setAttendance('');
                    onAddTodo(name, grade, attendance);
                }}
            >Добавить
            </button>
        </>
    );
}
