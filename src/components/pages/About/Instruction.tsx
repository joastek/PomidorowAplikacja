import "../../../styles/pages/Instruction.scss";
import Arrow from "../../../styles/icons/ArrowLeftOutlined.png";
import DoubleArrow from "../../../styles/icons/DoubleLeftArrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BackgroundColorContext } from "../../models/Background";
import Footer from "../../footer/Footer";
const Instruction = () => {
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
            <p>1. Zdecyduj, jakie zadanie ma być wykonane.</p>2. Ustaw
            czasomierz na 25 minut (tradycyjnie 25 minut)
            <p>3. Pracuj nad zadaniem.</p>
            <p>
              4. Zakończ pracę, gdy zadzwoni zegar i umieść znacznik kontrolny
              na kartce.
            </p>
            <p>
              5. Po czterech pomodoros, zrób dłuższą przerwę (15 – 30 minut),
              wyzeruj liczbę znaczników, a następnie przejdź do kroku 1.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Instruction;
