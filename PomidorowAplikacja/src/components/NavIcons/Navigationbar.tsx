import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive }: any) =>
            isActive ? classes.active : undefined
          }
        >
          <Home />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }: any) =>
            isActive ? classes.active : undefined
          }
        >
          <Information />
        </NavLink>
        <Settings />
      </nav>

      <Footer />
      <Outlet></Outlet>
    </>
  );
};

export default NavigationBar;
