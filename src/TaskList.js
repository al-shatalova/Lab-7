import {useEffect, useState} from 'react';

export default function TaskList({
                                     todos,
                                     onChangeTodo,
                                     onDeleteTodo,
                                 }) {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [gradeFilter, setGradeFilter] = useState('');

    const handleCheckboxChange = (taskId) => {
        setSelectedStudents((prevSelected) => {
            if (prevSelected.includes(taskId)) {
                return prevSelected.filter((id) => id !== taskId);
            } else {
                return [...prevSelected, taskId];
            }
        });
    };

    const handleGradeFilterChange = (event) => {
        setGradeFilter(event.target.value);
    };

    const filteredTodos = todos.filter((todo) => {
        if (gradeFilter === '') {
            return true;
        }
        return String(todo.grade) === gradeFilter;
    });

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label className="form-label">Фильтрация по оценке:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={gradeFilter}
                            onChange={handleGradeFilterChange}
                        />
                    </div>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Оценка</th>
                            <th>Присутствие</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredTodos.map((todo) => (
                            <Task
                                key={todo.id}
                                todo={todo}
                                onChange={onChangeTodo}
                                onDelete={onDeleteTodo}
                                onSelect={handleCheckboxChange}
                                isSelected={selectedStudents.includes(todo.id)}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function Task({ todo, onChange, onDelete, onSelect, isSelected }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState({ ...todo });

    const handleEdit = () => {
        setIsEditing(true);
        setEditedTodo({ ...todo });
    };

    const handleSave = () => {
        setIsEditing(false);
        onChange(editedTodo);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (field, value) => {
        setEditedTodo((prevEditedTodo) => ({
            ...prevEditedTodo,
            [field]: value,
        }));
    };

    const handleCheckboxChange = () => {
        onSelect(todo.id);
    };

    return (
        <tr className={isSelected ? 'selected' : ''}>
            <td>
                {isEditing ? (
                    <input
                        value={editedTodo.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                ) : (
                    todo.name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        value={editedTodo.grade}
                        onChange={(e) => handleChange('grade', e.target.value)}
                    />
                ) : (
                    todo.grade
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        value={editedTodo.attendance}
                        onChange={(e) => handleChange('attendance', e.target.value)}
                    />
                ) : (
                    todo.attendance
                )}
            </td>
            <td>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                />
                <button onClick={() => onDelete(todo.id)}>Удалить</button>
            </td>
        </tr>
    );
}