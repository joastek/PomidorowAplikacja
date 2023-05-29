import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import Settings from "./Settings";
import "../../styles/pages/NavBar.scss";
import infIcon from "../../styles/icons/Infromation.png";
import logo from "../../styles/icons/Logo.png";
import homeIcon from "../../styles/icons/home.png";
import { BackgroundColorContext } from "../models/Background";
const NavigationBar = ({
  handleWorkTimeChange,
  handleBreakTimeChange,
}: any) => {
  const { backgroundColor } = useContext(BackgroundColorContext);
  return (
    <>
      <div className="navBar" style={{ backgroundColor }}>
        <img src={logo} className="logo" />
        <div className="navIcons">
          <NavLink
            to="/"
            className={({ isActive }: any) => (isActive ? "active" : undefined)}
          >
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <img className="icon" src={homeIcon} />
            </motion.div>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }: any) => (isActive ? "active" : undefined)}
          >
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
              <img className="icon" src={infIcon} />
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
