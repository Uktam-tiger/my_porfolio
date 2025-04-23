import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import mainBackground from "././public/main_back_ground_flame.mp4";
import flameMenu from "./images/choose_menu_flame_opacity.gif";
import samaele from "./images/samaele_animate_last.png";
import AboutMe from "./AboutMe.jsx";
import MyProjects from "./MyProjects.jsx";
import MySkills from "./MySkills.jsx";
import OrderMenu from "./OrderMenu.jsx";

function App() {
    useEffect(() => {
        const disableContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", disableContextMenu);
        return () => {
            document.removeEventListener("contextmenu", disableContextMenu);
        };
    }, []);

    const [vsiblePage, setVsiblePage] = useState("AboutMe");
    const firstRenderRef = useRef(true);

    const showPage = () => {
        switch (vsiblePage) {
            case "AboutMe":
                return <AboutMe firstRender={firstRenderRef.current} />;
            case "MyProjects":
                return <MyProjects />;
            case "MySkills":
                    return <MySkills />;
            case "OrderMenu":
                return <OrderMenu />;
        }
    };

    useEffect(() => {
        firstRenderRef.current = false;
    }, []);

    return (
        <>
            <motion.video autoPlay loop muted id="background_video" src={mainBackground}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }} />

            <div id={"background_title_for_mobile_block"}>
                <motion.h1 id="background_title"
                           initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 2, delay: 1}}>
                    Добро пожаловать в моё портфолио!
                </motion.h1>
            </div>

            <motion.div id="samaele_main_theme_container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 3 }}>
                <motion.img src={samaele} alt="" id="samaele_main_theme" />
            </motion.div>

            <motion.div id="choose_variants_menu"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 5 }}>
                <div onClick={() => setVsiblePage("AboutMe")}>
                    О себе<img src={flameMenu} alt="" className="flame_menu" />
                </div>
                <div onClick={() => setVsiblePage("MyProjects")}>
                    Работы<img src={flameMenu} alt="" className="flame_menu" />
                </div>
                <div onClick={() => setVsiblePage("MySkills")}>
                    Скиллы<img src={flameMenu} alt="" className="flame_menu" />
                </div>
                <div onClick={() => setVsiblePage("OrderMenu")}>
                    Заказать<img src={flameMenu} alt="" className="flame_menu" />
                </div>
            </motion.div>

            {showPage()}
        </>
    );
}

export default App;