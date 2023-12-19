import {useState} from 'react';

function Form({right_answer}) {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Правильно</h1>
    }
    else if (status === 'fail') {
        return <h1>Неправильно! Правильный ответ: {right_answer}</h1>
    }

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== right_answer;
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
            setStatus('fail');
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
                <br/><br/><br/>
                <button className='submit-button ' type='submit' disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
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


export default Form;