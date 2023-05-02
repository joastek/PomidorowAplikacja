import Settings from "./NavIcons/Settings";
import Information from "./NavIcons/Information";
import classes from "./NavigationBar.module.css";
import Logo from "./Logo";
const NavigationBar = () => {
  return (
    <>
      <Logo />
      <nav className={classes.nav}>
        <Settings />

        <Information />
      </nav>
    </>
  );
};

export default NavigationBar;
