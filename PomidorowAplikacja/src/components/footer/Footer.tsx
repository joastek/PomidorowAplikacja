import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <a href="https://www.facebook.com/jan.czyszczon.31">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="https://chat.openai.com/">
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://chat.openai.com/">
        {" "}
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://chat.openai.com/">
        {" "}
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Footer;
