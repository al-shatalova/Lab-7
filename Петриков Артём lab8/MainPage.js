import {Link} from "react-router-dom";
import Square from './Square';
import {useState} from "react";

export default function TaskApp() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    return (
       <>
           <h1 className={'stath1'}>Статьи:</h1>

           <Square>
               <h1 className={'StatH1'}>Как веб-сообщество зарабатывает на партнерских программах хостинга</h1>
               <p className={'StatText'}>Делимся историями тех, кто зарабатывает на партнерках: узнали, что они делают для этого, и какая сумма выходит в месяц.Веб-студии, агентства, разработчики и другие представители веб-индустрии могут получать доход не только от своих услуг, но и за счет хостинга — с помощью партнерских программ. Партнерка обычно работает так: приводишь хостеру клиента, и он тебе за это выплачивает вознаграждение. Чаще всего это определенный процент от услуг хостинга, которые подключили новые пользователи. Использовать партнерки можно по-разному — вот самые популярные варианты.</p>
               <Panel
                   title="Дата написания"
                   isActive={activeIndex === 0}
                   onShow={() => setActiveIndex(0)}
               >
                   10.10.2023
               </Panel>
               <Panel
                   title="Об авторе"
                   isActive={activeIndex === 1}
                   onShow={() => setActiveIndex(1)}
               >
                   Автор: Михаил Александрович
               </Panel>

               <div className="ReadNextContainer">
                   <Link to="/Article">
                       <button className={"ReadNextButton"}>
                           Читать далее
                       </button>
                   </Link>
               </div>
           </Square>

           <br/><br/>

            <Square>
                <h1 className={'StatH1'}>Apple Pro Weekly News (11.12 – 17.12.23)</h1>
                <p className={'StatText'}>На прошлой неделе у Apple всё же вышли некоторые новинки, но и парочку новых устройств компания потеряет в ближайшее время – сразу две судебные тяжбы дошли до своей почти финальной точки. Ряд обновлений ПО вышло для разработчиков и для всех – изучаем, что там нового. Что уже известно об iPhone 16 и 17, какие ещё новинки ждать в будущем году и многое другое. Вперёд к новостям!</p>

                <Panel
                    title="Дата написания"
                    isActive={activeIndex2 === 0}
                    onShow={() => setActiveIndex2(0)}
                >
                    19.12.2023
                </Panel>
                <Panel
                    title="Об авторе"
                    isActive={activeIndex2 === 1}
                    onShow={() => setActiveIndex2(1)}
                >
                    Автор: Тимоти Дональд Кук
                </Panel>

                <div className="ReadNextContainer">
                    <Link to="/Article2">
                        <button className={"ReadNextButton"}>
                            Читать далее
                        </button>
                    </Link>
                </div>
           </Square>
       </>
    );
}

function Panel({
                   title,
                   children,
                   isActive,
                   onShow
               }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p className={'StatP'}>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Отобразить
                </button>
            )}
        </section>
    );
}