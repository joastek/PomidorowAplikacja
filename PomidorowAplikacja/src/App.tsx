import "../src/styles/App.css";
import { useState, useEffect } from "react";

import About from "./components/pages/About";
import NavigationBar from "./components/NavBar/Navigationbar";
import ErrorPage from "./components/pages/Error";
import { Route, Routes } from "react-router-dom";

import CountDownBox from "./components/timer/CountdownBox";

function App() {
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
          <Route path="/about" element={<About />} />
          <Route path="/*" errorElement={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
