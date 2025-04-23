import "./MySkills.css";
import {motion} from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import telegram from "./images/telegram_icon.png";
import instagram from "./images/instagramm_icon.png";
import computerLiteracy from "./skills_images/computer_literacy.png";
import microsoftOffice from "./skills_images/microsoft_office.png";
import admin from "./skills_images/admin.png";
import photoshop from "./skills_images/photoshop.png";
import blender from "./skills_images/blender.png";
import interiorDesign from "./skills_images/interior_design.png";
import javascript from "./skills_images/javascript.png";
import react from "./skills_images/react_js.png";
import nodeJs from "./skills_images/node_js.png";
import bootstrap from "./skills_images/bootstrap.png";
import sql from "./skills_images/sql.png";
import webStorm from "./skills_images/webstorm_logo.png";
import mySql from "./skills_images/mysql.png";

function MySkills() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false });
    }, []);

    return (
        <>
            <motion.div id="container_of_my_skills"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.2}}>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Компьютерная грамотность:</h1>
                        <img src={computerLiteracy} alt="" className={"my_skills_images"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Я владею в совершенстве навыками компьютерной грамотности. Как и все
                            IT-специалисты по соответствующим направлениям - становлюсь с компьютером
                            как "единое целое", и могу быть хорошим помощником для общего рабочего
                            персонала, если вдруг кто-то из сотрудников работающих за компьютером станет
                            нуждаться в краткой консультации по своему персональному компьютеру,
                            либо станет нуждаться в некоторой тех-поддержке.
                        </p>
                        <p>
                            Соответственно, обращая внимание на вышесказанное, я требую аккуратного и
                            бережного отношения к информационным технологиям, особенно к компьютерам!
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Офисные программы:</h1>
                        <img src={microsoftOffice} alt="" id={"ms_office_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Я хорошо разбираюсь в программных продуктах Microsoft Office, в
                            частности таких как: Microsoft Word, Microsoft Excel и Microsoft
                            PowerPoint. Могу также работать на Microsoft Visio (например, если
                            возникает потребность составить блок-схему, либо алгоритм действий).
                        </p>
                        <p>
                            Я в совершенстве могу работать с электронными документами в Word,
                            мои знания формул и функций в Excel позволяют мне совершать расчёты
                            и заполнения данных в электронных таблицах намного быстрее,
                            а мои навыки в PowerPoint позволяют мне создавать красивые
                            и впечатлительные презентации с анимациями.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Администрирование:</h1>
                        <img src={admin} alt="" className={"my_skills_images"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Как вы уже и сами поняли, я могу не только создавать различные
                            системные платформы для различных учреждений, я могу также и быстро
                            и качественно с ними работать.
                        </p>
                        <p>
                            Мои знания и навыки в сфере "Компьютерной грамотности" и в программных
                            продуктах Microsoft office позволяют мне успешно работать с готовыми
                            платформами различных учреждений, таких как например: Общеобразовательные
                            школы, ВУЗы, Банковские системы, Рыночные системы и прочие учреждения у
                            которых имеются свои системы управления базами данных.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Редактирование изображений:</h1>
                        <img src={photoshop} alt="" id={"photoshop_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Я не плохо владею навыками стилизации и редактирования 2D изображений.
                            За основу реализации предпочитаю редактор Adobe Photoshop. В данной среде
                            я могу к примеру: реставрировать старые фотографии, улучшать новые, создавать
                            различные логотипы... И даже работать в фото студии.
                        </p>
                        <p>
                            Как вы уже и сами заметили, различные изображения, и вообще сама 2D-графика
                            в целом - является неотъемлемой частью Frontend-разработки. К примеру,
                            я лично сам в процессе разработки использую очень много элементов 2D-графики.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>3D Архитектура:</h1>
                        <img src={blender} alt="" id={"blender_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Наряду с навыками 2D-графики, я также немного владею и навыками 3D-графики.
                            Было время, когда захотелось попробовать свои силы в сфере 3D-моделирования
                            и архитектуры в 3D-дизайне интерьера. Сначала мне показался интересным и
                            очень удобным 3D MAX Autodesk, но чуть позже в свет вышла похожая среда
                            реализации 3D-графики с более удобным интерфейсом и с огромным количеством
                            дополнительных функций, в свою очередь облегчающих работу и ускоряющих
                            процессы реализации проектов.
                        </p>
                        <p>
                            Основываясь на своём опыте, советую данный вариант
                            всем занимающимся реализацией 3D-графики!
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Дизайн интерьера:</h1>
                        <img src={interiorDesign} alt="" className={"my_skills_images"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Благодаря навыкам владения 2D-графики и 3D-графики я могу виртуально
                            смоделировать вам дизайн интерьера вашей квартиры, всего дома (включая
                            подъезды), детские площадки, вашего офиса и вообще всего вашего рабочего
                            учреждения в целом, и так далее...
                        </p>
                        <p>
                            Вы можете заказать мне проект виртуального дизайна интерьера для вашего
                            дома или офиса уточнив детали, такие как, например: количество комнат и их
                            размеры (высота и площадь), цвета и стили (желательнее с наглядными
                            примерами), окна и обои, и так далее...
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Язык JavaScript:</h1>
                        <img src={javascript} alt="" id={"javascript_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            А теперь мы с вами дошли до моей самой главной фишки! Моя стихия...
                            Моя сила... Моя МОЩЬ! Это несравненный и неповторимый язык программирования,
                            который не нуждается в представлении! Специально созданный и заточенный
                            именно для Frontend-разработки, оживляющий Web-страницы, позже ставший
                            универсальным (и для web, и для desktop, и для android приложений), а также
                            единственный кто посадил на ж@пу знаменитый язык программирования
                            Python, который сейчас у каждого начинающего у@бка на языке, буквально сместив
                            его с первого места на второе в мире!
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Библиотека React JS:</h1>
                        <img src={react} alt="" id={"javascript_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Технология React JavaScript - это мощный инструмент Frontend-разработки!
                            React JS - это не просто библиотека, это откровение в мире Web-разработки.
                            React - это свобода. Это мощь. Это эволюция JavaScript.
                        </p>
                        <p>
                            Он приносит порядок в хаос интерфейсов, превращая код в чистую поэзию.
                            С его помощью создаются молниеносные, масштабируемые и интерактивные приложения,
                            где каждая компонента - как отдельное перо на крыле великого ангела UI.
                            Если ты хочешь творить настоящие шедевры, а не просто и тупо
                            писать код, то в таком случае - тебе нужен React.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Библиотека Node JS:</h1>
                        <img src={nodeJs} alt="" id={"javascript_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Технология Node JavaScript — мощный инструмент для серверной разработки.
                            Node.js позволяет запускать JavaScript вне браузера, делая возможной
                            разработку серверной логики на одном языке - как для Frontend,
                            так и для Backend. Он особенно хорош для создания быстрых, масштабируемых
                            приложений, которые работают с большим количеством запросов в реальном
                            времени. Асинхронная архитектура и неблокирующий ввод-вывод делают Node.js
                            отличным выбором для чатов, API, потоковых сервисов и многого другого.
                            Простой в освоении, гибкий в использовании - Node.js по праву считается одной
                            из самых популярных технологий в современном мире!
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Библиотека Bootstrap:</h1>
                        <img src={bootstrap} alt="" id={"bootstrap_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            Bootstrap - популярный фреймворк для быстрой вёрстки.
                            Bootstrap - это набор готовых стилей и компонентов,
                            который помогает быстро создавать адаптивные и аккуратные интерфейсы.
                            С его помощью можно легко сверстать современный сайт без глубокого погружения в CSS.
                            Он включает в себя сетку, кнопки, формы, модальные окна и многое другое -
                            всё уже стилизовано и работает "из коробки".
                            Отлично подходит для быстрого прототипирования и ускорения разработки.
                            Bootstrap экономит время и позволяет сосредоточиться на логике,
                            не теряя при этом визуального качества.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Язык запросов SQL:</h1>
                        <img src={sql} alt="" id={"sql_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            SQL - язык работы с базами данных. SQL (Structured Query Language)
                            используется для взаимодействия с базами данных.
                            С его помощью можно получать, добавлять, изменять и удалять данные,
                            а также управлять самой структурой базы - таблицами, связями и правами доступа.
                            Это фундаментальный инструмент для хранения и обработки информации,
                            на который опираются практически все современные приложения.
                        </p>
                        <p>
                            SQL прекрасно сочетается с технологией Node.js, дополняя друг-друга и
                            исключая возможные системные баги обеспечивают мощный Backend!
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Среда разработки MySQL:</h1>
                        <img src={mySql} alt="" id={"mysql_skills_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            MySQL - надёжная система управления базами данных.
                            MySQL - это одна из самых популярных систем управления базами данных с
                            открытым исходным кодом. Она используется для хранения, организации и
                            обработки информации в Web-приложениях и не только.
                            MySQL работает с языком SQL и отлично подходит для проектов любого
                            масштаба - от небольших сайтов до крупных корпоративных систем.
                            Быстрая, стабильная и простая в использовании,
                            MySQL часто используется вместе с языками и технологиями,
                            такими как PHP, Node.js и Python. Это проверенное временем решение,
                            которое легко интегрируется и масштабируется.
                        </p>
                    </div>
                </div>
                <div className={"my_skills_container"}>
                    <div className="skills_container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Среда разработки WebStorm:</h1>
                        <img src={webStorm} alt="" id={"webstorm_image"}/>
                    </div>
                    <div className="skills_container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Пояснение:</h1>
                        <p>
                            WebStorm - это мощная среда разработки созданная специально для
                            Frontend-разработки и мой личный выбор! WebStorm - это профессиональная
                            IDE от крутой компании JetBrains, созданная специально для работы
                            с языками программирования и их технологиями, такими как:
                            JavaScript, TypeScript, React и другими Frontend-технологиями.
                            Она предлагает умную подсветку синтаксиса, автодополнение,
                            удобную навигацию по проекту и встроенные инструменты для работы с Git,
                            тестами и отладкой. WebStorm экономит время и делает процесс разработки более комфортным и продуктивным.
                            Это отличное решение как для начинающих, так и для опытных разработчиков.
                        </p>
                    </div>
                </div>
            </motion.div>
            <div id="container_footer">
                <h1>Мои контактные данные:</h1>
                <div id="footer_contact_container">
                    <ul>
                        <li id={"my_telegram"}>
                            <img src={telegram} alt="" id="image_telegram"/>
                            Мой телеграмм:
                            <a href="https://t.me/outcast_369"
                               target={"_blank"}> @outcast_369
                            </a>
                        </li>
                        <li id={"my_instagram"}>
                            <img src={instagram} alt="" id="image_instagram"/>
                            Мой инстаграм:
                            <a href="https://www.instagram.com/outcast_369/"
                               target={"_blank"}> @outcast_369
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MySkills;