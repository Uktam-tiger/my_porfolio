import "./MyProjects.css";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import inetShop from "./projects_images/inet_shop.jpg";
import digitalPharmacy from "./projects_images/digital_pharmacy.webp";
import digitalCafe from "./projects_images/digital_cafe.jpg";
import digitalEnterprise from "./projects_images/digital_enterprise.jpg";
import inetWarehouse from "./projects_images/inet_warehouse.jpg";
import telegram from "./images/telegram_icon.png";
import instagram from "./images/instagramm_icon.png";

function MyProjects() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false });
    }, []);

    return (
        <>
            <motion.div id="container_of_projects" initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{ duration: 1 , delay: 0.2}}>
                <div className={"my_projects_container"}>
                    <div className="container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Интернет магазин:</h1>
                        <img src={inetShop} alt="" className={"my_projects_images"}/>
                    </div>
                    <div className="container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Информация для ознакомления:</h1>
                        <p>
                            Ознакомьтесь с проектом "Интернет магазин". Данный проект является
                            наглядным примером удалённых магазинов, созданных с целью
                            предоставить максимальный комфорт и удобство для совершения покупок
                            не выходя из дома, либо же, находясь абсолютно в другом месте в
                            дали от самого магазина.
                        </p>
                        <p>
                            Если вы хотите расширить ассортимент услуг вашего магазина,
                            увеличить доход за счёт оборота посредством автоматизированных
                            услуг вашего магазина, создать максимальный комфорт для ваших клиентов
                            дав им возможность совершать покупки находясь у себя дома... Тогда
                            данный заказ послужит вам большой выгодой!
                        </p>
                    </div>
                </div>
                <div className={"my_projects_container"}>
                <div className="container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Автоматизированная аптека:</h1>
                        <img src={digitalPharmacy} alt="" className={"my_projects_images"}/>
                    </div>
                    <div className="container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Информация для ознакомления:</h1>
                        <p>
                            Ознакомьтесь с проектом "Автоматизированная аптека".
                            Данный проект является наглядным примером платформ, созданных специально
                            для аптек, а также компаний работающих с медикаментами с целью экономии
                            времени и повышения производительности работы рабочего персонала за счёт
                            программного обеспечения.
                        </p>
                        <p>
                            Если вам надоело в ручную вести учёт количества проданных и
                            имеющихся в медикаментов. Постоянно и напряжённо тыкать
                            пальцем в калькулятор, а также вести записи в журнале... Тогда
                            данный заказ послужит вам большой выгодой!
                        </p>
                    </div>
                </div>
                <div className={"my_projects_container"}>
                    <div className="container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Автоматизированное кафе:</h1>
                        <img src={digitalCafe} alt="" className={"my_projects_images"}/>
                    </div>
                    <div className="container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Информация для ознакомления:</h1>
                        <p>
                            Ознакомьтесь с проектом "Автоматизированное кафе".
                            Данный проект является наглядным примером программ, созданных специально
                            для кафе и ресторанов. Облегчите работу вашим
                            администраторам, официантам и барменам, создав максимальный комфорт
                            вашим клиентам дав им возможность заказывать с их мобильных устройств
                            в самом ресторане, либо доставкой на дом.
                        </p>
                        <p>
                            Если вы хотите увеличить оборот вашего кафе, за счёт
                            экономии времени и энергии ваших сотрудников, а также, за счёт
                            предоставлении вашим клиентам удобных интерактивных услуг, тогда
                            данный заказ для вас!
                        </p>
                    </div>
                </div>
                <div className={"my_projects_container"}>
                    <div className="container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Цифровое предприятие:</h1>
                        <img src={digitalEnterprise} alt="" className={"my_projects_images"}/>
                    </div>
                    <div className="container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Информация для ознакомления:</h1>
                        <p>
                            Ознакомьтесь с проектом "Цифровое предприятие".
                            Данный проект является наглядным примером платформ, разработанных
                            исключительно для контор, частных предприятий и государственных
                            учреждений. Повысьте коэффициент работы сотрудников вашей конторы
                            используя готовую платформу облегчающую деятельность вашей конторы
                            за счёт экономии времени и сил.
                        </p>
                        <p>
                            Данный заказ подойдёт как государственным учреждениям, так и частным
                            компаниям, общеобразовательным и специализированным школам, учебным
                            центрам и высшим учебным заведениям.
                        </p>
                    </div>
                </div>
                <div className={"my_projects_container"}>
                    <div className="container_image"
                         data-aos="fade-right"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Цифровой магазин (склад):</h1>
                        <img src={inetWarehouse} alt="" className={"my_projects_images"}/>
                    </div>
                    <div className="container_info"
                         data-aos="fade-left"
                         data-aos-delay="300"
                         data-aos-duration="800">
                        <h1>Информация для ознакомления:</h1>
                        <p>
                            Ознакомьтесь с проектом "Цифровой магазин".
                            Данный проект является наглядным примером баз данных, разработанных
                            исключительно для магазинов, супермаркетов и торговых центров, малых и
                            крупных складов, а также для торговых предприятий и торговых агенств.
                        </p>
                        <p>
                            Если вы хотите совершить большой прорыв в сфере малого и среднего
                            бизнеса, именно связанного с родом деятельности торговых точек, таких
                            как: магазины, супермаркеты или торговые магазины; либо, если у вас
                            есть собственное торговое агенство - тогда этот заказ для вас!
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

export default MyProjects;