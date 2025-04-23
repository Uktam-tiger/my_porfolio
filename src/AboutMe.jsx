import "./AboutMe.css";
import { motion } from "framer-motion";
import samaeleUktamMe from "./images/samaele_uktam_me.png";
import samaeleBackDropFlame from "./images/backdrop_flame.gif";
import telegram from "./images/telegram_icon.png";
import instagram from "./images/instagramm_icon.png";

function AboutMe({ firstRender }) {
    return (
        <>
            <motion.div id="container" initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: firstRender ? 6 : 0.2 }}>
                <motion.div id="container_image_samaele">
                    <img src={samaeleUktamMe} alt="" id="image_samaele"/>
                    <img src={samaeleBackDropFlame} alt="" id="image_samaele_backdrop"/>
                </motion.div>
                <motion.div className="container_inner">
                    <h1>Коротко обо мне:</h1>
                    <p>
                        Всем привет народ! Меня зовут Uktam Ruslanovich.
                        Я родился в Узбекистане, в городе Ургенче в 1993 году.
                        Ещё с самого детства я люблю информационные технологи
                        и интересуюсь ими вплоть до сегоднящнего дня.
                        В 2014 году я поступил в Ташкентский Университет Информационных
                        Технологий (сокращённо ТУИТ) Ургенческий филиал ("Бакалавриат")
                        где проучился 4 года на факультете "Компьютерный инжиниринг".
                        Ещё с первого курса в процессе обучения я заинтересовался
                        Web-разработкой и полюбил язык "JavaScript" с первого взгляда!
                        После того как я изучил Javascript, я начал увлекаться
                        фреймворками этого на мой взгляд несравненного и мощного языка
                        программирования. Больше всего для меня выделились такие фреймворки
                        как "JQuery", "React.js" и "Node.js". Также, я владею библиотекой
                        стилизации для CSS "Bootstrap". Да, как вы уже и сами поняли из
                        вышесказанного, я являюсь Frontend-разработчиком!
                    </p>
                </motion.div>
                <motion.div className="container_inner">
                    <p>
                        Честно признаваясь, скажу что по большей части предпочитаю
                        классический JavaScript (Vanilla.js) и стандартный CSS (то есть,
                        и первое, и второе - без использования фреймворков).
                        Такой подход позволяет сделать код чище и читабельней, а также
                        предотвращает от возможных множеств ошибок и некорректностей.
                    </p>
                    <p>
                        Мои способности в IT-сфере не ограничиваются только навыками
                        Frontend-разработки. Помимо Frontend-разработки, я ещё владею такими
                        навыками, как: "3D-моделирования", навыками "Мобилографии" (могу снимать
                        и редактировать краткометражные видеоролики), профессионально могу работать
                        с офисной работой, могу работать с профессиональными платформами (с такими
                        как, готовые базы данных, личные серверные приложения предприятий и так далее).
                    </p>
                    <p>
                        В моём портфолио вы можете ознакомиться с некоторыми моими работами,
                        узнать о моих способностях в IT-сфере, заказать мне проект,
                        либо просмотреть мои видеоуроки.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                id="container_footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: firstRender ? 7 : 0.7 }}>
                <motion.h1>Мои контактные данные:</motion.h1>
                <div id="footer_contact_container">
                    <ul>
                        <li id={"my_telegram"}>
                            <img src={telegram} alt="" id="image_telegram"/>
                            Мой телеграмм:
                            <a href="https://t.me/outcast_369" target={"_blank"}> @outcast_369</a>
                        </li>
                        <li id={"my_instagram"}>
                            <img src={instagram} alt="" id="image_instagram"/>
                            Мой инстаграм:
                            <a href="https://www.instagram.com/outcast_369/" target={"_blank"}> @outcast_369</a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

export default AboutMe;