import classes from "./CountdownBox.module.css";

const CountDownBox = (time: number) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.box_1}>
          <div className={classes.text}>{formatTime(time)}</div>
        </div>
        <div className={classes.box_2}></div>
        <div className={classes.box_3}></div>
      </div>
    </>
  );
};

export default CountDownBox;
