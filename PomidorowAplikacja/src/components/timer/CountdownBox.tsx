import classes from "./CountdownBox.module.css";

function CountDownBox() {
  return (
    <div className={classes.box}>
      <div className={classes.box_1}></div>
      <div className={classes.box_2}></div>
      <div className={classes.box_3}></div>
    </div>
  );
}

export default CountDownBox;
