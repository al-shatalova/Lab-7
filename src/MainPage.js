import { useState } from 'react'
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, name: 'Петриков', grade: 5, attendance: 'Был' },
    { id: 1, name: 'Кондрашов', grade: 5, attendance: 'Опоздал' },
];


export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(name, grade, attendance) {
        setTodos((prevTodos) => [
            ...prevTodos, // Spread синтаксис
            {
                id: nextId++,
                name: name,
                grade: grade,
                attendance: attendance,
            },
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) =>
                todo.id === nextTodo.id ? { ...todo, title: nextTodo.title, done: nextTodo.done } : todo
            );
        });
    }


    function handleDeleteTodo(todoId) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}