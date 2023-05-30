import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BackgroundColorContext } from "../models/Background";
import "../../styles/pages/About.scss";
import "../../styles/pages/CountodwonBox.scss";
import Footer from "../footer/Footer";
const About = () => {
  const { backgroundColor }: any = useContext(BackgroundColorContext);
  return (
    <>
      <div className="About_container" style={{ backgroundColor }}>
        go to sss<Link to="/">menu</Link>
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
