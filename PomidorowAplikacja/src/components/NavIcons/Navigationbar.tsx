import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Settings from "./Settings";
import Information from "./Information";
import classes from "./NavigationBar.module.css";
import Logo from "./Logo";
import Home from "./Home";
import Footer from "../footer/Footer";

const NavigationBar = () => {
  return (
    <>
      <Logo />
      <nav className={classes.nav}>
        <Link to="/">
          <Home />
        </Link>
        <Settings />
        <Link to="/about">
          <Information />
        </Link>
      </nav>

      <Footer />
      <Outlet></Outlet>
    </>
  );
};

export default NavigationBar;
