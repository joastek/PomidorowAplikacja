import "../../styles/pages/Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer_bar">
        {" "}
        <Link className="icon" to="https://www.facebook.com/jan.czyszczon.31">
          <i className="fa-brands fa-facebook"></i>
        </Link>{" "}
        <Link className="icon" to="https://chat.openai.com/">
          <i className="fa-solid fa-envelope"></i>
        </Link>{" "}
        <Link className="icon" to="https://chat.openai.com/">
          <i className="fa-brands fa-github"></i>
        </Link>{" "}
        <Link className="icon" to="https://chat.openai.com/">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
    </>
  );
};

export default Footer;
