import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const Modal = ({ open, onClose }: any) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <button onClick={onClose}>escape</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;
