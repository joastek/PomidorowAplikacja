import { useState, useEffect } from "react";
import classes from "./ActionButtons.module.css";
import CountDownBox from "./CountdownBox";
function ActionButtons() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };
  const getFormattedTime = (milisecond) => {
    let total_seconds = parseInt(Math.floor(milisecond / 1000));
    let total_minutes = parseInt(Math.floor(milisecond / 60));
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    return `${minutes}${seconds}`;
  };
  return (
    <>
      <CountDownBox time={time} />
      <div className={classes.box}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={startTimer}> Start</p>
          ) : (
            <p onClick={stopTimer}> Stop</p>
          )}
        </div>
        <div className={classes.container}>
          <p onClick={resetTimer}>Reset{getFormattedTime(time)}</p>
        </div>
      </div>
    </>
  );
}

export default ActionButtons;
