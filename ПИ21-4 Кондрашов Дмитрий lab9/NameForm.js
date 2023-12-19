import {useState} from 'react';

function NameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Логин</h2>
            <label>
                Имя:{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Фамилия:{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>

            <p>
                Вас зовут: <br/> <b>{fullName}</b>
            </p>
        </>
    );
}

export default NameForm;