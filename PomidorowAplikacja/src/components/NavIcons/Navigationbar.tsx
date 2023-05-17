import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Settings from "./Settings";
import classes from "./NavigationBar.module.css";

import Footer from "../footer/Footer";
import infIcon from "../icons/Infromation.png";
import logo from "../icons/Logo.png";
import homeIcon from "../icons/home.png";
const NavigationBar = ({
  handleWorkTimeChange,
  handleBreakTimeChange,
}: any) => {
  return (
    <>
      <img className={classes.logo} src={logo} />
      <nav className={classes.nav}>
        <NavLink
          to="/"
          className={({ isActive }: any) =>
            isActive ? classes.active : undefined
          }
        >
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <img className={classes.icon} src={homeIcon} />
          </motion.div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }: any) =>
            isActive ? classes.active : undefined
          }
        >
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <img className={classes.icon} src={infIcon} />
          </motion.div>
        </NavLink>
        <Settings
          handleWorkTimeChange={handleWorkTimeChange}
          handleBreakTimeChange={handleBreakTimeChange}
        />
      </nav>

      <Footer />
      <Outlet></Outlet>
    </>
  );
};

export default NavigationBar;
