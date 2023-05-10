import classes from "./CountdownBox.module.css";

const CountDownBox = ({ timeLeft }: any) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.box_1}>
          <div className={classes.text}>{`${Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}:${(timeLeft % 60)
            .toString()
            .padStart(2, "0")}`}</div>
        </div>
        <div className={classes.box_2}></div>
        <div className={classes.box_3}></div>
      </div>
    </>
  );
};

export default CountDownBox;
