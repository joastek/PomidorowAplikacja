import classes from "./Information.module.css";
import { motion } from "framer-motion";
import logo from "../icons/home.png";
function Home() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <img className={classes.icon} src={logo} />
      </motion.div>
    </>
  );
}

export default Home;
