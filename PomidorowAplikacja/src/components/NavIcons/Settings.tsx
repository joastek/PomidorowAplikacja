import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./Settings.module.css";
import Modal from "../pages/Modal";

import logo from "../icons/Settings.png";
function Settings({ handleWorkTimeChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <img className={classes.icon} src={logo} />
      </motion.div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleWorkTimeChange={handleWorkTimeChange}
      ></Modal>
    </>
  );
}

export default Settings;
