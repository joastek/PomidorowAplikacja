import classes from "./Modal.module.css";
import colors from "./ModalColors.module.css";
import ReactDom from "react-dom";
import logo from "../../icons/ClockCircleOutlined.png";
import theme from "../../icons/image.png";
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
          <img className={classes.logo} src={logo} />
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
        <div className={colors.colorContainer}>
          <div className={colors.themeColor_1} />
          <div className={colors.themeColor_2} />
          <div className={colors.themeColor_3} />
          <div className={colors.themeColor_4} />
          <div className={colors.themeColor_5} />
        </div>
        <button onClick={onClose}>Zatwierdź</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;
