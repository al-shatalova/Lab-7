import { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>Введите имя и фамилию</h2>
            <label className={'QuestionP'}>
                Имя:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className={'QuestionP'}>
                Фамилия:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p className={'QuestionP'}>
                Имя и фамилия: <b>{fullName}</b>
            </p>
        </>
    );
}