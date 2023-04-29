import { motion } from "framer-motion";
import Settings from "./NavIcons/Settings";
import Information from "./NavIcons/Information";
import classes from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
      <Settings />
      <div className={classes.box}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
      </div>
      <Information />
    </nav>
  );
};

export default NavigationBar;
