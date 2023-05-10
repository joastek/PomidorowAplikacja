import React, { useState, useEffect, createContext } from "react";
import classes from "./ActionButtons.module.css";
import CountDownBox from "./CountdownBox";
import Settings from "../NavIcons/Settings";
import Modal from "../pages/Modal";

const ActionButtons: React.FC = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workTime * 60);

  useEffect(() => {
    let intervalId: any = null;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsWorking(!isWorking);
      setTimeLeft(isWorking ? breakTime * 60 : workTime * 60);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, isWorking, breakTime, workTime]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsWorking(true);
    setTimeLeft(workTime * 60);
  };

  const handleWorkTimeChange = (event: any) => {
    setWorkTime(Number(event.target.value));
    if (isWorking) {
      setTimeLeft(Number(event.target.value) * 60);
    }
  };

  const handleBreakTimeChange = (event: any) => {
    setBreakTime(Number(event.target.value));
    if (!isWorking) {
      setTimeLeft(Number(event.target.value) * 60);
    }
  };

  return (
    <>
      <CountDownBox timeLeft={timeLeft} />

      <div className={classes.box}>
        <div className={classes.container}>
          {!isRunning ? (
            <p onClick={handleStart}> Start</p>
          ) : (
            <p onClick={handlePause}> Stop</p>
          )}
          <input onChange={handleWorkTimeChange}></input>
          <input onChange={handleBreakTimeChange}></input>
          <div></div>
        </div>
        <div className={classes.container}>
          <p onClick={handleReset}>Reset</p>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
