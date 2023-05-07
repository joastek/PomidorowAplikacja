import classes from "./CountdownBox.module.css";

const CountDownBox = ({ time }: any) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.box_1}>
          <div className={classes.text}>:</div>
        </div>
        <div className={classes.box_2}></div>
        <div className={classes.box_3}></div>
      </div>
    </>
  );
};

export default CountDownBox;
