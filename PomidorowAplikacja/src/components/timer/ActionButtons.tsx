import classes from "./ActionButtons.module.css";
import CountDownBox from "./CountdownBox";

const ActionButtons: React.FC = ({
  timeLeft,
  isRunning,
  handleStart,
  handlePause,
  handleReset,
  handleWorkTimeChange,
  handleBreakTimeChange,
}: any) => {
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
