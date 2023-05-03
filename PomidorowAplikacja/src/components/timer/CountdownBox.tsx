import classes from "./CountdownBox.module.css";
import ActionButtons from "./ActionButtons";
const CountDownBox = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.box_1}>
          <div className={classes.text}>25:00</div>
        </div>
        <div className={classes.box_2}></div>
        <div className={classes.box_3}></div>
      </div>
      <ActionButtons />
    </>
  );
};

export default CountDownBox;
