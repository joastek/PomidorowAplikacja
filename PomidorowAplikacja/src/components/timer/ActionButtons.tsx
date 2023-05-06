import { useState } from "react";
import classes from "./ActionButtons.module.css";
function ActionButtons() {
  const [time, setTime] = useState(25);
  const [timer, SetTimer] = useState(false);

  return (
    <div className={classes.box} onClick={() => SetTimer(true)}>
      <div className={classes.container}>
        {" "}
        <p>Start</p>
      </div>
      <div className={classes.container}>
        <p>Reset</p>
      </div>
    </div>
  );
}

export default ActionButtons;
