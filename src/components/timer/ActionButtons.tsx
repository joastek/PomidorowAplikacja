import { useContext } from "react";
import { BackgroundColorContext } from "../models/Background";
import Footer from "../footer/Footer";
import "../../styles/pages/ActionButtons.scss";
const ActionButtons: React.FC = ({
  isRunning,
  handleStart,
  handlePause,
  handleReset,
}: any) => {
  const { backgroundColor }: any = useContext(BackgroundColorContext);

  return (
    <>
      <div className="button_box_container" style={{ backgroundColor }}>
        <div className="button_container">
          {!isRunning ? (
            <p onClick={handleStart}> Start</p>
          ) : (
            <p onClick={handlePause}> Stop</p>
          )}

          <div></div>
        </div>
        <div className="button_container">
          <p onClick={handleReset}>Reset</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActionButtons;
