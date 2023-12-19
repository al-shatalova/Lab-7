import Square from './Square';
import Question from "./Question";
import Form from "./Form";

export default function TaskApp() {

    return (
        <>
            <Square>
                <Form></Form>
            </Square>

            <br/>

            <Square>
                <h1 className={'QuestionH1'}>Первый вопрос</h1>
                <p className={'QuestionP'}>Какой инструмент React использует для компиляции JSX?</p>
                <Question otvet={'babel'}></Question>
            </Square>

            <br/>

            <Square>
                <h1 className={'QuestionH1'}>Второй вопрос</h1>
                <p className={'QuestionP'}>При визуализации списка с использованием JavaScript метода map(), что требуется для каждого отображаемого элемента?</p>
                <Question otvet={'key'}></Question>
            </Square>

            <br/>

            <Square>
                <h1 className={'QuestionH1'}>Третий вопрос</h1>
                <p className={'QuestionP'}>Какой порт локального хоста по умолчанию используется сервером разработки React?</p>
                <Question otvet={'3000'}></Question>
            </Square>

            <br/>

            <Square>
                <h1 className={'QuestionH1'}>Четвертый вопрос</h1>
                <p className={'QuestionP'}>Какой метод отвечает за вывод информации через React JS компонент?</p>
                <Question otvet={'render'}></Question>
            </Square>
        </>
    );
}




