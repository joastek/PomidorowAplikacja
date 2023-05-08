import { useState, useRef } from "react";
import classes from "./ActionButtons.module.css";
import CountDownBox from "./CountdownBox";
import Modal from "../pages/Modal";

const ActionButtons: React.FC = () => {
  // const [timer, setTimer] = useState(0);
  const [time, setTime] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = window.setInterval(() => {
      setTime(time);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    window.clearInterval(intervalRef.current!);
  };

  const resetTimer = () => {
    setTime(time);
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
  function handleTimerChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseFloat(event.target.value);
    setTime(newValue);
    console.log(newValue);
  }
  return (
    <>
      <CountDownBox value={time} time={time} />
      <Modal />
      <div className={classes.box}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={handleStartStopClick}> Start</p>
          ) : (
            <p onClick={handleStartStopClick}> Stop</p>
          )}
          <input value={time} onChange={handleTimerChange}></input>
          <div>{time}</div>
        </div>
        <div className={classes.container}>
          <p onClick={handleResetClick}>Reset</p>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
