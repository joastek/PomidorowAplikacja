import classes from "./ActionButtons.module.css";

import { useContext } from "react";
import { BackgroundColorContext } from "../models/Background";
const ActionButtons: React.FC = ({
  isRunning,
  handleStart,
  handlePause,
  handleReset,
}: any) => {
  const { backgroundColor, setBackgroundColor }: any = useContext(
    BackgroundColorContext
  );
  const black = "purple";
  const handleColorChange = () => {
    setBackgroundColor(black);
  };
  return (
    <>
      <div className={classes.box}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={handleStart}> Start</p>
          ) : (
            <p onClick={handlePause}> Stop</p>
          )}

          <div></div>
        </div>
        <div className={classes.container}>
          <div style={{ backgroundColor }}>
            <p onClick={handleColorChange}>TEST</p>
          </div>
          <p onClick={handleReset}>Reset</p>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
