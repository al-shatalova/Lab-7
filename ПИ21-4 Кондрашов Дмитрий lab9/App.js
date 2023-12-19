import './App.css';
import Form from "./Form";
import NameForm from "./NameForm";
import {useEffect, useState} from "react";

function App() {

    const questions = [
        {question: 'Какая компания разработала React?', answer: 'facebook'},
        {question: 'useState это?', answer: 'хук'},
        {question: 'Что используется для получения ссылки на DOM узел или экземпляр компонента в React?', answer: 'реф'},
        {question: 'Прикладной протокол для передачи гипертекстовых документов, таких как HTML это?', answer: 'http'},
        {question: 'Единственный обязательный метод в классовом компоненте?', answer: 'render'},
    ];

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    useEffect(() => {
        setShuffledQuestions(shuffleArray(questions));
    }, []);


    return (
        <>
            <center><h1>React quiz</h1></center>
            <div className='quiz'>
                <NameForm></NameForm>
            </div>
                {shuffledQuestions.map((q, index) => (
                    <div className='quiz'>
                        <div key={index}>
                            <p>{q.question}</p>
                            <Form right_answer={q.answer}></Form>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default App;
