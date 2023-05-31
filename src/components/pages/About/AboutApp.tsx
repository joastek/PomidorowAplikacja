import "../../../styles/pages/AboutApp.scss";
import { useContext } from "react";
import { BackgroundColorContext } from "../../models/Background";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Arrow from "../../../styles/icons/ArrowLeftOutlined.png";
import DoubleArrow from "../../../styles/icons/DoubleLeftArrow.png";
import Footer from "../../footer/Footer";
const AboutApp = () => {
  const { backgroundColor }: any = useContext(BackgroundColorContext);
  return (
    <>
      <div className="Instruction_box" style={{ backgroundColor }}>
        <Link to="/" className="about_doublearrow">
          {" "}
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            {" "}
            <img src={DoubleArrow}></img>
          </motion.div>
        </Link>
        <Link to="/about" className="about_arrow">
          {" "}
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            {" "}
            <img src={Arrow}></img>
          </motion.div>
        </Link>
        <div className="Instruction">
          <div className="Instruction_text">
            Technika Pomodoro (oryg. pomodoro technique od wł. pomodoro
            „pomidor” i słowa technique „metoda, technika”) – metoda zarządzania
            czasem opracowana przez Francesco Cirillo w latach 80. XX wieku.
            System wykorzystuje krótki budzik do podziału pracy na 25-minutowe
            sekcje – tzw. pomodori – i czasy przerw. Nazwa pomodoro pochodzi od
            kuchennego minutnika, którego Cirillo użył w swoich pierwszych
            eksperymentach[1]. Metoda opiera się na założeniu, że częste pauzy
            mogą poprawić mobilność psychiczną[2][3].
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutApp;
