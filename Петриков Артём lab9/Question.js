import {useState} from 'react';

function Question({otvet}) {
    const [answer, setAnswer] = useState(''); // Хук
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');


    if (status === 'success') {
        return <h1>Правильный ответ!</h1>
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== otvet;
                if (shouldError) {
                    reject(new Error('Попробуй снова!'));
                } else {
                    resolve();
                }
            }, 1500);
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br/>
                <button type='submit' disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Подтвердить
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}


export default Question;