import classes from "./Logo.module.css";
import logo from "../icons/Logo.png";

function Logo() {
  return (
    <>
      <img className={classes.logo} src={logo} />
    </>
  );
}

export default Logo;
