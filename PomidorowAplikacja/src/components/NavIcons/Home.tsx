import classes from "./Information.module.css";
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <svg
          className={classes.icon}
          viewBox="0 0 70 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 22.125L35 4.91666L61.25 22.125V49.1667C61.25 50.4706 60.6354 51.7212 59.5415 52.6433C58.4475 53.5653 56.9638 54.0833 55.4167 54.0833H14.5833C13.0362 54.0833 11.5525 53.5653 10.4585 52.6433C9.36458 51.7212 8.75 50.4706 8.75 49.1667V22.125Z"
            stroke="black"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.25 54.0833V29.5H43.75V54.0833"
            stroke="black"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
}

export default Home;
