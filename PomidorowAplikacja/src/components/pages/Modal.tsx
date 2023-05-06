import classes from "./Modal.module.css";

const Modal = ({ open, onClose }: any) => {
  if (!open) return null;
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <button onClick={onClose}>escape</button>
      </div>
    </div>
  );
};

export default Modal;
