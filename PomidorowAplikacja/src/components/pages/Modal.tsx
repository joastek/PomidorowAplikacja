import classes from "./Modal.module.css";
import ReactDom from "react-dom";
import logo from "../icons/ClockCircleOutlined.png";
const Modal = ({ open, onClose, handleWorkTimeChange }: any) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <h1>Ustawienia</h1>
        <div>
          <img className={classes.logo} src={logo} />
          <div>Czas Pracy</div>
        </div>
        <input type="number" onChange={handleWorkTimeChange} max={99}></input>
        <button onClick={onClose}>Zatwierdź</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;
