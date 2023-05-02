import Settings from "./NavIcons/Settings";
import Information from "./NavIcons/Information";
import classes from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
      <Settings />

      <Information />
    </nav>
  );
};

export default NavigationBar;
