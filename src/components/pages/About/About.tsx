import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BackgroundColorContext } from "../../models/Background";
import { motion } from "framer-motion";
import "../../../styles/pages/About.scss";
import "../../../styles/pages/CountodwonBox.scss";
import Footer from "../../footer/Footer";
import Arrow from "../../../styles/icons/ArrowLeftOutlined.png";
const About = () => {
  const { backgroundColor }: any = useContext(BackgroundColorContext);
  return (
    <>
      <div className="About_container" style={{ backgroundColor }}>
        <Link to="/" className="about_arrow">
          {" "}
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            {" "}
            <img src={Arrow}></img>
          </motion.div>
        </Link>

        <div className="boxes">
          <div className="box">
            <div className="box_1">
              <NavLink to="/about/app" className="text">
                O aplikacji
              </NavLink>
            </div>
            <div className="box_2"></div>
            <div className="box_3"></div>
          </div>
          <div className="box">
            <div className="box_1">
              {" "}
              <NavLink to="/about/instruction" className="text">
                Instrukcja
              </NavLink>
            </div>
            <div className="box_2"></div>
            <div className="box_3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
