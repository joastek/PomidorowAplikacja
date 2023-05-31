import "../src/styles/App.scss";
import { useState, useEffect } from "react";

import About from "./components/pages/About/About";
import NavigationBar from "./components/NavBar/Navigationbar";
import ErrorPage from "./components/pages/Error";
import { Route, Routes } from "react-router-dom";

import CountDownBox from "./components/timer/CountdownBox";
import AboutApp from "./components/pages/About/AboutApp";
import Instruction from "./components/pages/About/Instruction";
import ResetSound from "./styles/sounds/ResetButton.wav";
import SwitchSound from "./styles/sounds/SwitchButton.wav";
import EndWorkoutSound from "./styles/sounds/EndWork.wav";
import StartWorkoutSound from "./styles/sounds/StartWork.wav";
const App = () => {
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
      }, 50);
    } else if (timeLeft === 0) {
      setIsWorking(!isWorking);
      setTimeLeft(isWorking ? breakTime * 60 : workTime * 60);
    }
    if (timeLeft === 0 && isWorking) {
      const endWorkAudio = new Audio(EndWorkoutSound);
      endWorkAudio.play();
    } else if (timeLeft === 0 && !isWorking) {
      const endBreakAudio = new Audio(StartWorkoutSound);
      endBreakAudio.play();
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, isWorking, breakTime, workTime]);

  const handleStart = () => {
    setIsRunning(true);
    const SwitchAudio = new Audio(SwitchSound);
    SwitchAudio.play();
  };

  const handlePause = () => {
    setIsRunning(false);
    const SwitchAudio = new Audio(SwitchSound);
    SwitchAudio.play();
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsWorking(true);
    setTimeLeft(workTime * 60);
    const ResetAudio = new Audio(ResetSound);
    ResetAudio.play();
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
      <Routes>
        <Route
          path="/"
          element={
            <NavigationBar
              handleWorkTimeChange={handleWorkTimeChange}
              handleBreakTimeChange={handleBreakTimeChange}
            />
          }
        >
          {" "}
          <Route
            path="/"
            element={
              <CountDownBox
                timeLeft={timeLeft}
                isRunning={isRunning}
                handleStart={handleStart}
                handlePause={handlePause}
                handleReset={handleReset}
              />
            }
          />
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/app" element={<AboutApp />} />
          <Route path="/about/instruction" element={<Instruction />} />
          <Route path="/*" errorElement={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
