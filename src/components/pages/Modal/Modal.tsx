import classes from "./Modal.module.css";
import ModalColors from "./ModalColors";
import ReactDom from "react-dom";
import clock from "../../../styles/icons/ClockCircleOutlined.png";
import theme from "../../../styles/icons/image.png";
const Modal = ({
  open,
  onClose,
  handleWorkTimeChange,
  handleBreakTimeChange,
}: any) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <h1>Ustawienia</h1>
        <div className={classes.headerBox}>
          <img className={classes.logo} src={clock} />
          <div className={classes.headerTitle}>Stoper</div>
        </div>
        <div className={classes.setBox}>
          <div className={classes.setting}>
            <input
              type="number"
              onChange={handleWorkTimeChange}
              min={1}
              max={99}
            />
            <div className={classes.workDesc}> Czas pracy</div>{" "}
          </div>
          <div className={classes.setting}>
            <input
              type="number"
              onChange={handleBreakTimeChange}
              min={1}
              max={99}
            />
            <div className={classes.workDesc}> Przerwa</div>{" "}
          </div>
        </div>
        <div className={classes.headerBox}>
          <img className={classes.logo} src={theme} />
          <div className={classes.headerTitle}>Motyw</div>
        </div>
        <ModalColors />
        <button onClick={onClose}>Zatwierdź</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;