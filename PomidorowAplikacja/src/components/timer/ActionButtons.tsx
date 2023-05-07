import { useState, useRef } from "react";
import classes from "./ActionButtons.module.css";
import CountDownBox from "./CountdownBox";
const ActionButtons: React.FC = () => {
  const [time, setTime] = useState(60 * 25);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    window.clearInterval(intervalRef.current!);
  };

  const resetTimer = () => {
    setTime(60 * 25);
    setIsRunning(false);
    window.clearInterval(intervalRef.current!);
  };

  const handleStartStopClick = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const handleResetClick = () => {
    resetTimer();
  };

  return (
    <>
      <CountDownBox time={time} />

      <div className={classes.box}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={handleStartStopClick}> Start</p>
          ) : (
            <p onClick={handleStartStopClick}> Stop</p>
          )}
        </div>
        <div className={classes.container}>
          <p onClick={handleResetClick}>Reset</p>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
