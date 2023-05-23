import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import Settings from "./Settings";
import classes from "./NavigationBar.module.css";
import Footer from "../footer/Footer";
import infIcon from "../icons/Infromation.png";
import logo from "../icons/Logo.png";
import homeIcon from "../icons/home.png";
import { BackgroundColorContext } from "../models/Background";
const NavigationBar = ({
  handleWorkTimeChange,
  handleBreakTimeChange,
}: any) => {
  const { backgroundColor } = useContext(BackgroundColorContext);
  return (
    <>
      <div className={classes.navBar} style={{ backgroundColor }}>
        <img src={logo} />
        <div className={classes.navIcons}>
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
          {/* <div className={classes.box} style={{ backgroundColor }}></div> */}
          <Settings
            handleWorkTimeChange={handleWorkTimeChange}
            handleBreakTimeChange={handleBreakTimeChange}
          />
        </div>
      </div>
    
      <Outlet></Outlet>
    </>
  );
};

export default NavigationBar;
