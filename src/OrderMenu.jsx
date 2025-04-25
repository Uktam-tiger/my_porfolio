import "./OrderMenu.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import telegram from "./images/telegram_icon.png";
import instagram from "./images/instagramm_icon.png";
import flameMenu from "./images/choose_menu_flame_opacity.gif";

function OrderMenu() {
    const [passport, setPassport] = useState('');
    const [phone, setPhone] = useState('+998');
    const [shake, setShake] = useState(false);

    const inputRefs = useRef({
        surname: null,
        name: null,
        passport: null,
        address: null,
        details: null
    });

    const phoneRef = useRef(null);

    useEffect(() => {
        const raw = passport.toUpperCase().replace(/[^A-ZА-Я0-9]/g, '');
        const letters = raw.slice(0, 2).replace(/[^A-ZА-Я]/g, '');
        const digits = raw.slice(2).replace(/\D/g, '');
        const d1 = digits.slice(0, 3);
        const d2 = digits.slice(3, 5);
        const d3 = digits.slice(5, 7);

        const formatted = `${letters}${d1 ? ' ' + d1 : ''}${d2 ? ' ' + d2 : ''}${d3 ? ' ' + d3 : ''}`;

        if (passport !== formatted) {
            setPassport(formatted);
        }
    }, [passport]);

    useEffect(() => {
        if (phoneRef.current) {
            phoneRef.current.selectionStart = phone.length;
            phoneRef.current.selectionEnd = phone.length;
        }
    }, [phone]);

    const handleChangePhoneNumber = (e) => {
        const input = e.target.value;
        if (!input.startsWith('+998')) {
            setPhone('+998');
            return;
        }
        const cleaned = input.replace(/[^\d+]/g, '');
        const countryCode = cleaned.slice(0, 4);
        const rest = cleaned.slice(4);
        let formatted = countryCode;
        if (rest.length > 0) {
            formatted += `(${rest.slice(0, 2)}`;
        }
        if (rest.length > 2) {
            formatted += `) ${rest.slice(2, 5)}`;
        }
        if (rest.length > 5) {
            formatted += ` ${rest.slice(5, 7)}`;
        }
        if (rest.length > 7) {
            formatted += ` ${rest.slice(7, 9)}`;
        }
        setPhone(formatted);
    };

    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        passport: passport,
        address: '',
        orderType: '',
        phone: phone,
        details: ''
    });

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            passport: passport,
            phone: phone
        }));
    }, [passport, phone]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRadioChange = (e) => {
        setFormData(prev => ({
            ...prev,
            orderType: e.target.id
        }));
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const validateForm = () => {
        if (
            !formData.surname ||
            !formData.name ||
            !formData.passport ||
            !formData.address ||
            !formData.phone ||
            !formData.orderType ||
            !formData.details  // Добавлена проверка деталей заказа
        ) {
            alert('Пожалуйста, заполните все обязательные поля:\n\n• Фамилия\n• Имя\n• Паспорт\n• Адрес\n• Телефон\n• Тип заказа\n• Детали заказа');
            triggerShake();

            // Фокусировка на первом незаполненном поле
            if (!formData.surname) inputRefs.current.surname?.focus();
            else if (!formData.name) inputRefs.current.name?.focus();
            else if (!formData.passport) inputRefs.current.passport?.focus();
            else if (!formData.address) inputRefs.current.address?.focus();
            else if (!formData.phone) phoneRef.current?.focus();
            else if (!formData.details) inputRefs.current.details?.focus(); // Фокус на textarea

            return false;
        }

        const passportRaw = formData.passport.replace(/\s/g, '').toUpperCase();
        const passportRegex = /^[A-ZА-Я]{2}\d{7}$/;
        if (!passportRegex.test(passportRaw)) {
            alert('Неверный формат паспорта. Пример: AB 123 45 67');
            inputRefs.current.passport?.focus();
            triggerShake();
            return false;
        }

        const phoneDigits = formData.phone.replace(/\D/g, '');
        const operatorCode = phoneDigits.slice(3, 5);
        const validOperators = ['90', '91', '93', '94', '95', '97', '98', '99', '88', '33'];

        if (
            phoneDigits.length !== 12 ||
            !phoneDigits.startsWith('998') ||
            !validOperators.includes(operatorCode)
        ) {
            alert('Неверный номер телефона Узбекистана. Пример: +998(90) 123 45 67');
            phoneRef.current?.focus();
            triggerShake();
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            const response = await axios.post('https://telegram-bot-server-txsr.onrender.com/send-order', {
                surname: formData.surname,
                name: formData.name,
                passport: formData.passport,
                address: formData.address,
                orderType: formData.orderType,
                phone: formData.phone,
                details: formData.details
            });

            if (response.data.success) {
                alert('✅ Заказ отправлен!');
                setFormData({
                    surname: '',
                    name: '',
                    passport: '',
                    address: '',
                    orderType: '',
                    phone: '+998',
                    details: ''
                });
                setPassport('');
                setPhone('+998');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('❌ Ошибка отправки. Напишите мне в Telegram @outcast_369');
        }
    };

    return (
        <>
            <motion.div id="container_of_form"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.2}}
                        className={shake ? 'shake' : ''}>
                <div id={"form_block"}>
                    <div id="form_block_inner">
                        <h1>Для заказа заполните пожалуйста форму:</h1>
                        <form onSubmit={(e) => e.preventDefault()} id={"form_of_order_menu"}>
                            <div className={"form_block_inner_containers"}>
                                <div className={"personal_info_containers"}>
                                    <input type="text" name="surname" maxLength={30} placeholder={"Фамилия"}
                                           className={"personal_info"}
                                           value={formData.surname}
                                           onChange={handleChange}
                                           ref={el => inputRefs.current.surname = el}/>
                                </div>
                                <div className={"personal_info_containers"}>
                                    <input type="text" name="name" maxLength={30} placeholder={"Имя"}
                                           className={"personal_info"}
                                           value={formData.name}
                                           onChange={handleChange}
                                           ref={el => inputRefs.current.name = el}/>
                                </div>
                                <div className={"personal_info_containers"}>
                                    <input type="text" name="passport" maxLength={12}
                                           placeholder={"Серия и номер паспорта"}
                                           className={"personal_info"}
                                           value={passport}
                                           onChange={(e) => setPassport(e.target.value)}
                                           ref={el => inputRefs.current.passport = el}/>
                                </div>
                                <div className={"personal_info_containers"}>
                                    <input type="text" name="address" maxLength={100}
                                           placeholder={"Адрес (область, город, улица)"}
                                           className={"personal_info"}
                                           value={formData.address}
                                           onChange={handleChange}
                                           ref={el => inputRefs.current.address = el}/>
                                </div>
                            </div>

                            <div className={"form_block_inner_containers"}>
                                <div id={"radio_menu_block"}>
                                    {[
                                        ['for_me', 'Для себя'],
                                        ['for_company', 'Для частной компании'],
                                        ['for_small_business', 'Для малого бизнеса'],
                                        ['for_middle_business', 'Для среднего бизнеса'],
                                        ['for_government', 'Для гос. учреждения']
                                    ].map(([id, label]) => (
                                        <div className={"radio_menu_block_inner"} key={id}>
                                            <label htmlFor={id}>{label}:</label>
                                            <input type="radio" id={id} className={"radio_select_button"}
                                                   name={"radio_select"}
                                                   checked={formData.orderType === id}
                                                   onChange={handleRadioChange}/>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={"form_block_inner_containers"}>
                                <div className={"personal_info_containers"}>
                                    <input type="tel" name="phone" maxLength={18}
                                           placeholder={"Номер телефона"}
                                           className={"personal_info"}
                                           value={phone}
                                           onChange={handleChangePhoneNumber}
                                           ref={phoneRef}
                                           style={{fontWeight: "bold"}}/>
                                </div>
                                <div id={"textarea_container"}>
                                    <textarea name="details" id="details_of_order"
                                              placeholder={"Опишите подробно детали заказа"}
                                              cols="30" rows="10"
                                              value={formData.details}
                                              onChange={handleChange}
                                              ref={el => inputRefs.current.details = el}/>
                                </div>
                            </div>
                        </form>

                        <button id={"submit_order"} onClick={handleSubmit}>
                            Подтвердить заказ !
                            <img src={flameMenu} alt="" id="submit_order_flame_animation"/>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div id="container_footer"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 1}}>
                <h1>Мои контактные данные:</h1>
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

export default OrderMenu;

// import "./OrderMenu.css";
// import {motion} from "framer-motion";
// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import telegram from "./images/telegram_icon.png";
// import instagram from "./images/instagramm_icon.png";
// import flameMenu from "./images/choose_menu_flame_opacity.gif";
//
// function OrderMenu() {
//     const [passport, setPassport] = useState('');
//     useEffect(() => {
//         const raw = passport.toUpperCase().replace(/[^A-ZА-Я0-9]/g, '');
//         const letters = raw.slice(0, 2).replace(/[^A-ZА-Я]/g, '');
//         const digits = raw.slice(2).replace(/\D/g, '');
//         const d1 = digits.slice(0, 3);
//         const d2 = digits.slice(3, 5);
//         const d3 = digits.slice(5, 7);
//
//         const formatted = `${letters}${d1 ? ' ' + d1 : ''}${d2 ? ' ' + d2 : ''}${d3 ? ' ' + d3 : ''}`;
//
//         if (passport !== formatted) {
//             setPassport(formatted);
//         }
//     }, [passport]);
//
//     const [phone, setPhone] = useState('+998');
//     const inputRef = useRef(null);
//     useEffect(() => {
//         if (inputRef.current) {
//             inputRef.current.selectionStart = phone.length;
//             inputRef.current.selectionEnd = phone.length;
//         }
//     }, [phone]);
//     const handleChangePhoneNumber = (e) => {
//         const input = e.target.value;
//         if (!input.startsWith('+998')) {
//             setPhone('+998');
//             return;
//         }
//         const cleaned = input.replace(/[^\d+]/g, '');
//         const countryCode = cleaned.slice(0, 4);
//         const rest = cleaned.slice(4);
//         let formatted = countryCode;
//         if (rest.length > 0) {
//             formatted += `(${rest.slice(0, 2)}`;
//         }
//         if (rest.length > 2) {
//             formatted += `) ${rest.slice(2, 5)}`;
//         }
//         if (rest.length > 5) {
//             formatted += ` ${rest.slice(5, 7)}`;
//         }
//         if (rest.length > 7) {
//             formatted += ` ${rest.slice(7, 9)}`;
//         }
//         setPhone(formatted);
//     };
//
//     const [formData, setFormData] = useState({
//         surname: '',
//         name: '',
//         passport: passport,
//         address: '',
//         orderType: '',
//         phone: phone,
//         details: ''
//     });
//
//     useEffect(() => {
//         setFormData(prev => ({
//             ...prev,
//             passport: passport,
//             phone: phone
//         }));
//     }, [passport, phone]);
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };
//
//     const handleRadioChange = (e) => {
//         setFormData(prev => ({
//             ...prev,
//             orderType: e.target.id
//         }));
//     };
//
//     const handleSubmit = async () => {
//         if (!formData.surname || !formData.name || !formData.phone) {
//             alert('Заполните имя, фамилию и телефон!');
//             return;
//         }
//
//         try {
//             const response = await axios.post('http://localhost:3001/send-order', {
//                 surname: formData.surname,
//                 name: formData.name,
//                 passport: formData.passport,
//                 address: formData.address,
//                 orderType: formData.orderType,
//                 phone: formData.phone,
//                 details: formData.details
//             });
//
//             if (response.data.success) {
//                 alert('✅ Заказ отправлен!');
//                 // Очистка формы (оставь твой текущий код)
//                 setFormData({
//                     surname: '',
//                     name: '',
//                     passport: '',
//                     address: '',
//                     orderType: '',
//                     phone: '+998',
//                     details: '' });
//                 setPassport('');
//                 setPhone('+998');
//             }
//         } catch (error) {
//             console.error('Ошибка:', error);
//             alert('❌ Ошибка отправки. Напишите мне в Telegram @outcast_369');
//         }
//     };
//
//     return (
//         <>
//             <motion.div id="container_of_form"
//                         initial={{opacity: 0, y: 20}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 1, delay: 0.2}}>
//                 <div id={"form_block"}>
//                     <div id="form_block_inner">
//                         <h1>Для заказа заполните пожалуйста форму:</h1>
//                         <form onSubmit={(e) => e.preventDefault()} id={"form_of_order_menu"}>
//                             <div className={"form_block_inner_containers"}>
//                                 <div className={"personal_info_containers"}>
//                                     <input type="text"
//                                            className={"personal_info"}
//                                            name="surname"
//                                            maxLength={30}
//                                            placeholder={"Фамилия"}
//                                            value={formData.surname}
//                                            onChange={handleChange}/>
//                                 </div>
//                                 <div className={"personal_info_containers"}>
//                                     <input type="text"
//                                            className={"personal_info"}
//                                            name="name"
//                                            maxLength={30}
//                                            placeholder={"Имя"}
//                                            value={formData.name}
//                                            onChange={handleChange}/>
//                                 </div>
//                                 <div className={"personal_info_containers"}>
//                                     <input type="text"
//                                            className={"personal_info"}
//                                            name="passport"
//                                            maxLength={12}
//                                            placeholder={"Серия и номер паспорта"}
//                                            value={passport}
//                                            onChange={(e) => setPassport(e.target.value)}/>
//                                 </div>
//                                 <div className={"personal_info_containers"}>
//                                     <input type="text"
//                                            className={"personal_info"}
//                                            name="address"
//                                            maxLength={100}
//                                            placeholder={"Адрес (область, город, улица)"}
//                                            value={formData.address}
//                                            onChange={handleChange}/>
//                                 </div>
//                             </div>
//                             <div className={"form_block_inner_containers"}>
//                                 <div id={"radio_menu_block"}>
//                                     <div className={"radio_menu_block_inner"}>
//                                         <label htmlFor={"for_me"}>Для себя:</label>
//                                         <input type="radio" id={"for_me"}
//                                                className={"radio_select_button"}
//                                                name={"radio_select"}
//                                                checked={formData.orderType === 'for_me'}
//                                                onChange={handleRadioChange}/>
//                                     </div>
//                                     <div className={"radio_menu_block_inner"}>
//                                         <label htmlFor={"for_company"}>Для частной компании:</label>
//                                         <input type="radio" id={"for_company"}
//                                                className={"radio_select_button"}
//                                                name={"radio_select"}
//                                                checked={formData.orderType === 'for_company'}
//                                                onChange={handleRadioChange}/>
//                                     </div>
//                                     <div className={"radio_menu_block_inner"}>
//                                         <label htmlFor={"for_small_business"}>Для малого бизнеса:</label>
//                                         <input type="radio" id={"for_small_business"}
//                                                className={"radio_select_button"}
//                                                name={"radio_select"}
//                                                checked={formData.orderType === 'for_small_business'}
//                                                onChange={handleRadioChange}/>
//                                     </div>
//                                     <div className={"radio_menu_block_inner"}>
//                                         <label htmlFor={"for_middle_business"}>Для среднего бизнеса:</label>
//                                         <input type="radio" id={"for_middle_business"}
//                                                className={"radio_select_button"}
//                                                name={"radio_select"}
//                                                checked={formData.orderType === 'for_middle_business'}
//                                                onChange={handleRadioChange}/>
//                                     </div>
//                                     <div className={"radio_menu_block_inner"}>
//                                         <label htmlFor={"for_government"}>Для гос. учреждения:</label>
//                                         <input type="radio" id={"for_government"}
//                                                className={"radio_select_button"}
//                                                name={"radio_select"}
//                                                checked={formData.orderType === 'for_government'}
//                                                onChange={handleRadioChange}/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className={"form_block_inner_containers"}>
//                                 <div className={"personal_info_containers"}>
//                                     <input type="tel"
//                                            className={"personal_info"}
//                                            name="phone"
//                                            maxLength={18}
//                                            placeholder={"Номер телефона"}
//                                            ref={inputRef}
//                                            value={phone}
//                                            onChange={handleChangePhoneNumber}
//                                            style={{"fontWeight": "bold"}}/>
//                                 </div>
//                                 <div id={"textarea_container"}>
//                                     <textarea name="details"
//                                               id="details_of_order"
//                                               cols="30"
//                                               rows="10"
//                                               placeholder={"Опишите подробно детали заказа"}
//                                               value={formData.details}
//                                               onChange={handleChange}>
//                                     </textarea>
//                                 </div>
//                             </div>
//                         </form>
//                         <button id={"submit_order"} onClick={handleSubmit}>
//                             Подтвердить заказ !
//                             <img src={flameMenu} alt="" id="submit_order_flame_animation"/>
//                         </button>
//                     </div>
//                 </div>
//             </motion.div>
//             <motion.div id="container_footer"
//                         initial={{opacity: 0, y: 20}}
//                         animate={{opacity: 1, y: 0}}
//                         transition={{duration: 1, delay: 1}}>
//                 <h1>Мои контактные данные:</h1>
//                 <div id="footer_contact_container">
//                     <ul>
//                         <li id={"my_telegram"}>
//                             <img src={telegram} alt="" id="image_telegram"/>
//                             Мой телеграмм:
//                             <a href="https://t.me/outcast_369"
//                                target={"_blank"}> @outcast_369
//                             </a>
//                         </li>
//                         <li id={"my_instagram"}>
//                             <img src={instagram} alt="" id="image_instagram"/>
//                             Мой инстаграм:
//                             <a href="https://www.instagram.com/outcast_369/"
//                                target={"_blank"}> @outcast_369
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </motion.div>
//         </>
//     );
// }
//
// export default OrderMenu;
