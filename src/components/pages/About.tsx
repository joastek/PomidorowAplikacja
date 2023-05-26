import { Link } from "react-router-dom";
import "../../styles/pages/About.scss";
import "../../styles/pages/CountodwonBox.scss";
import Footer from "../footer/Footer";
const About = () => {
  return (
    <>
      <div className="container">
        go to sss<Link to="/">menu</Link>
        <div className="boxes">
          <div className="box">
            <div className="box_1">
              <div className="text">O aplikacji</div>
            </div>
            <div className="box_2"></div>
            <div className="box_3"></div>
          </div>
          <div>
            <div className="box_1">
              {" "}
              <div className="text">Instrukcja</div>
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
