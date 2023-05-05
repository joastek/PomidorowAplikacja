import { Link } from "react-router-dom";
import Settings from "./Settings";
import Information from "./Information";
import classes from "./NavigationBar.module.css";
import Logo from "./Logo";
import Home from "./Home";

const NavigationBar = () => {
  return (
    <>
      <Logo />
      <nav className={classes.nav}>
        <Link to="/"></Link>
        <Home />
        <Settings />
        <Link to="/about">
          <Information />
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
