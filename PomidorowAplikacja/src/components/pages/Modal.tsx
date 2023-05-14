import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const Modal = ({ open, onClose, handleWorkTimeChange }: any) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <h1>Ustawienia</h1>

        <input
          type="text"
          onChange={handleWorkTimeChange}
          className={classes.box}
        ></input>
        <button onClick={onClose}>escape</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;
