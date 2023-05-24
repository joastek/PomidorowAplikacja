import classes from "./ActionButtons.module.css";

import { useContext } from "react";
import { BackgroundColorContext } from "../models/Background";
import Footer from "../footer/Footer";
const ActionButtons: React.FC = ({
  isRunning,
  handleStart,
  handlePause,
  handleReset,
}: any) => {
  const { backgroundColor }: any = useContext(BackgroundColorContext);

  return (
    <>
      <div className={classes.box} style={{ backgroundColor }}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={handleStart}> Start</p>
          ) : (
            <p onClick={handlePause}> Stop</p>
          )}

          <div></div>
        </div>
        <div className={classes.container}>
          <p onClick={handleReset}>Reset</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActionButtons;
