import React, { useRef } from 'react';
import Square from "./Square";

export default function Article2() {
    const firstRef2 = useRef(null);
    const secondRef2 = useRef(null);
    const thirdRef2 = useRef(null);

    function handleScrollToFirst2() {
        firstRef2.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    function handleScrollToSecond2() {
        secondRef2.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    function handleScrollToThird2() {
        thirdRef2.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    return (
        <>
            <Square>
                <nav>
                    <h1>Перейти к :</h1>
                    <button onClick={handleScrollToFirst2}>
                        Apple Pro Weekly News (11.12 – 17.12.23)
                    </button>
                    <br/><br/>
                    <button onClick={handleScrollToSecond2}>
                        iOS 17.3 beta, visionOS 1.0 beta 7, ПО для AirPods – вышло для разработчиков
                    </button>
                    <br/><br/>
                    <button onClick={handleScrollToThird2}>
                        Что нового в iOS 17.3 beta?
                    </button>
                </nav>
                <div className={'Article'}>
                    <section ref={firstRef2}>
                        <h2>Apple Pro Weekly News (11.12 – 17.12.23)</h2>
                        <p className={'ArticleP'}>На прошлой неделе у Apple всё же вышли некоторые новинки, но и парочку новых устройств компания потеряет в ближайшее время – сразу две судебные тяжбы дошли до своей почти финальной точки. Ряд обновлений ПО вышло для разработчиков и для всех – изучаем, что там нового. Что уже известно об iPhone 16 и 17, какие ещё новинки ждать в будущем году и многое другое. Вперёд к новостям!</p>
                    </section>
                    <section ref={secondRef2}>
                        <h2>iOS 17.3 beta, visionOS 1.0 beta 7, ПО для AirPods – вышло для разработчиков</h2>
                        <p className={'ArticleP'}>На прошлой неделе состоялся релиз iOS 17.2, iPadOS 17.2, watchOS 10.2, macOS 14.2, tvOS и HomePod OS 17.2, а также ряда старых систем. Внутри много нового, о чём мы рассказали в прошлом выпуске подробно, и даже показали. Коротко: новое системное приложение Дневник (но пока только для iPhone), фишки и улучшения для iPhone 15 Pro, дополнительные функции в Music, Сообщениях, звонках и даже поддержка Qi2 по MagSafe для iPhone 13/14. Часы получают новые жесты для изменения циферблатов, улучшения для фитнеса и многое другое. А для компьютеров Maс теперь есть новый виджет Shazam и улучшения в системных приложениях.
                            Но уже 12 декабря компания выпустила ряд новых бета-версий для разработчиков и публичных тестировщиков. Эти версии выйдут не ранее февраля 2024 года, а следующая бета-сборка ожидается вовсе аж в январе после 10-х чисел. Так что думайте сами – имеет ли смысл вам ставить данные бета-сборки.</p>

                    </section>
                    <section ref={thirdRef2}>
                        <h2>Что нового в iOS 17.3 beta?</h2>
                        <p className={'ArticleP'}>Apple вернула совместные плейлисты в Music, поддержку которых ранее убрала в iOS 17.2 beta 4. Функция была перенесена на 2024 год, как и возможность использования AirPlay для tv и HomePod в отелях.
                            Но ещё в совместных плейлистах для пользователей Music стали доступны реакции в виде анимированных эмодзи.Также в этой сборке Apple добавляет новую функцию «Защита украденного устройства» (Настройки > Face ID и пароль), которая обеспечивает дополнительный уровень безопасности в случае кражи вашего iPhone и если злоумышленнику известен ваш пароль от устройства. При активном режиме защиты украденного устройства – невозможно просмотреть пароли без использования Face ID или Touch ID, а также изменить ряд настроек устройства: Изменение и удаление паролей/Touch ID или Face ID, в том числе связок ключей в iCloud, просмотр и изменение данных в Wallet, а также использование данных из Wallet и Pay для оплаты где-либо, удаление любых данных и настроек, обновление настроек самого утерянного iPhone и других привязанных к аккаунту Apple ID устройств, отключение настроек конфиденциальности, iCloud и «Найти iPhone». Кроме того, сам режим защиты отключить и восстановить iPhone сможет только лично настоящий владелец – таким образом устройство превращается в тотальный кирпич до момента его возврата владельцу.</p>
                    </section>
                </div>
            </Square>
        </>
    );
}
