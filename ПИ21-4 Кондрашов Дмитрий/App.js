import './App.css';
import AddStudent from './AddStudent.js';
import {HashRouter as Router, Route, Link, Routes} from "react-router-dom";
import React, {useState} from "react";
import {useImmer} from 'use-immer';

let nextId = 6;
const students_list = [
    {id: 0, name: "Kondrashov Dmitry", passes: 1, score: 97.5, done: true},
    {id: 1, name: "Petrikov Artem", passes: 0, score: 97.5, done: true},
    {id: 2, name: "Farhutdinov Aidar", passes: 5, score: 80.5, done: true},
    {id: 3, name: "Kuserbaev Karim", passes: 5, score: 80.5, done: true},
    {id: 4, name: "Anpilov Kirill", passes: 1, score: 85.75, done: true},
    {id: 5, name: "Kuznetcova Margarita", passes: 0, score: 93, done: true},
];


function NotFound() {
    return <h2>NotFound</h2>;
}

function Registration() {
    return (
        <>
            <h2 className="text-uppercase text-center mb-5">Авторизация</h2>
            <form method="post">
                <div className="form-outline mb-4">
                    <label className="control-label" htmlFor="username">Email</label> :
                    <input type="text" className="form-control form-control-lg" id="username" name="username"
                           placeholder="Введите свой Email" autoFocus="autofocus"/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Пароль</label>:
                    <input type="password" id="password" name="password" className="form-control form-control-lg"
                           placeholder="Введите пароль"/>
                </div>
                <Link to={"/"} type="submit" name="login-submit" id="login-submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      value="Войти">Войти</Link>

            </form>
        </>
    );
}

function Main() {

    const [students, updateTodos] = useImmer(students_list);
    const [filterValue, setFilterValue] = useState(0);

    function handleAddStudent(title, score, passes) {
        updateTodos((draft) => {
            draft.push({
                id: nextId++,
                name: title,
                passes: passes,
                score: score
            });
        });
    }

    function handleDeleteTodo(studentId) {
        updateTodos((draft) => {
            const index = draft.findIndex(
                (t) => t.id === studentId
            );
            draft.splice(index, 1);
        });
    }

    const handleUpdatePasses = (studentId, newPasses) => {
        updateTodos((prevState) => {
            const updatedStudentsList = prevState.map(student => {
                if (student.id === studentId) {
                    return {...student, passes: newPasses};
                }
                return student;
            });
            return updatedStudentsList;
        });
    };

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const filteredStudents = students.filter(student => {
        return student.score >= filterValue;
    });

    const handleToggleChecked = (studentId) => {
        updateTodos((prevState) => {
            const updatedStudentsList = prevState.map(student => {
                if (student.id === studentId) {
                    return {...student, done: !student.done};
                }
                return student;
            });
            return updatedStudentsList;
        });
    };

    function StudentGenerator({array, OnDelete}) {
        // стрелочная функция по списку с использованием реквизитов
        return array.map((item) => (
            <>
                <tr>
                    <td>{item.id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
                    <td>
                        {item.passes}
                        <button onClick={() => handleUpdatePasses(item.id, item.passes + 1)}>+</button>
                    </td>
                    <td>
                        <button className={"btn btn-danger"} onClick={() => OnDelete(item.id)}>
                            Delete
                        </button>
                    </td>
                    <td>
                        <input className={"mycheckbox"}
                               type="checkbox"
                               checked={item.done}
                               onChange={() => handleToggleChecked(item.id)}
                        />
                    </td>
                </tr>
            </>
        ));
    }

    return (
        <>
            <Link to={"/login"} className={"btn btn-danger"}>Выйти</Link>
            <br></br>
            <input
                type="number" step={0.1} min={0}
                value={filterValue}
                onChange={handleFilterChange}
                placeholder="Фильрация по баллу"
            />
            <br></br>
            <AddStudent onAddStudent={handleAddStudent}/>
            <h1>ЖУРНАЛ</h1>
            <table className="tbl-color">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Средний балл</th>
                    <th>Пропуски</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <StudentGenerator array={filteredStudents}
                                  OnDelete={handleDeleteTodo}>
                </StudentGenerator>
                </tbody>
            </table>
        </>
    );
}

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/login" element={<Registration/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
