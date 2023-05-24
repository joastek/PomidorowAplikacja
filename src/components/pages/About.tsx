import { Link } from "react-router-dom";
import classes from "./About.module.css";
import titles from "../timer/CountdownBox.module.css";
import Footer from "../footer/Footer";
const About = () => {
  return (
    <>
      <div className={classes.container}>
        go to sss<Link to="/">menu</Link>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <div className={classes.box_1}>
              <div className={titles.text}>O aplikacji</div>
            </div>
            <div className={classes.box_2}></div>
            <div className={classes.box_3}></div>
          </div>
          <div>
            <div className={classes.box_1}>
              {" "}
              <div className={titles.text}>Instrukcja</div>
            </div>
            <div className={classes.box_2}></div>
            <div className={classes.box_3}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
