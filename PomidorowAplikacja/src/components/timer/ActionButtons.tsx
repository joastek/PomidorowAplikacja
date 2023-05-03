import classes from "./ActionButtons.module.css";
function ActionButtons() {
  return (
    <div className={classes.box}>
      <div className={classes.container}>
        {" "}
        <p>Start</p>
      </div>
      <div className={classes.container}>
        <p>Zatrzymaj</p>
      </div>
    </div>
  );
}

export default ActionButtons;
