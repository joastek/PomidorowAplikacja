import React from "react";
import ActionButtons from "./ActionButtons";
import "../../styles/pages/CountodwonBox.scss";
import { useContext } from "react";
import { BackgroundColorContext } from "../models/Background";
interface CountDownBoxProps {
  timeLeft: number;
  isRunning: boolean;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
}
const CountDownBox: React.FC<CountDownBoxProps> = ({
  timeLeft,
  isRunning,
  handleStart,
  handlePause,
  handleReset,
}) => {
  const { backgroundColor } = useContext(BackgroundColorContext);

  return (
    <>
      <div className="home_container" style={{ backgroundColor }}>
        <div className="timer">
          <div className="box_1">
            <div className="home_text">{`${Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0")}:${(timeLeft % 60)
              .toString()
              .padStart(2, "0")}`}</div>
          </div>
          <div className="box_2"></div>
          <div className="box_3"></div>
        </div>
        <div>
          <ActionButtons
            isRunning={isRunning}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
};

export default CountDownBox;
