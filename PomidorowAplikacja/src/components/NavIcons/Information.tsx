import { motion } from "framer-motion";

import classes from "./Information.module.css";
import logo from "../icons/Infromation.png";

const Information = () => {
  return (
    <>
      {" "}
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <img className={classes.icon} src={logo} />
      </motion.div>
    </>
  );
};

export default Information;
