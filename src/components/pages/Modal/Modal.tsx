import "../../../styles/pages/Modal.scss";
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
      <div className="backdrop " onClick={onClose} />
      <div className="modal">
        <h1>Ustawienia</h1>
        <div className="headerBox">
          <img className="logo " src={clock} />
          <div className="headerTitle">Stoper</div>
        </div>
        <div className="setBox">
          <div className="setting">
            <input
              type="number"
              onChange={handleWorkTimeChange}
              min={1}
              max={99}
            />
            <div className="workDesc"> Czas pracy</div>{" "}
          </div>
          <div className="setting">
            <input
              type="number"
              onChange={handleBreakTimeChange}
              min={1}
              max={99}
            />
            <div className="workDesc"> Przerwa</div>{" "}
          </div>
        </div>
        <div className="headerBox">
          <img className="logo" src={theme} />
          <div className="headerTitle">Motyw</div>
        </div>
        <ModalColors />
        <button onClick={onClose}>Zatwierdź</button>
      </div>
    </>,

    document.getElementById("overlays") as HTMLInputElement
  );
};

export default Modal;
