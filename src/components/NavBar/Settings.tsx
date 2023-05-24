import { motion } from "framer-motion";
import { useState } from "react";
import classes from "./NavigationBar.module.css";
import Modal from "../pages/Modal/Modal";
import settings from "../../styles/icons/Settings.png";

function Settings({ handleWorkTimeChange, handleBreakTimeChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <img
          className={classes.icon}
          src={settings}
          onClick={() => setIsOpen(true)}
        />
      </motion.div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleWorkTimeChange={handleWorkTimeChange}
        handleBreakTimeChange={handleBreakTimeChange}
      ></Modal>
    </>
  );
}

export default Settings;
