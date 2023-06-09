import "../../../styles/pages/ModalColors.scss";
import { useContext } from "react";
import { BackgroundColorContext } from "../../models/Background";
const ModalColors = () => {
  const { setBackgroundColor }: any = useContext(BackgroundColorContext);

  const themeColor1 = "purple";
  const themeColor2 = "#0bb362";
  const themeColor3 = "#0bb362";
  const themeColor4 = "rgb(214, 9, 128)";
  const themeColor5 = "rgb(223, 243, 5";

  const handleColorChange = () => {
    setBackgroundColor(themeColor1);
  };
  const handleColorChange2 = () => {
    setBackgroundColor(themeColor2);
  };
  const handleColorChange3 = () => {
    setBackgroundColor(themeColor3);
  };

  const handleColorChange4 = () => {
    setBackgroundColor(themeColor4);
  };

  const handleColorChange5 = () => {
    setBackgroundColor(themeColor5);
  };

  return (
    <>
      <div className="colorContainer">
        <div className="themeColor_1" onClick={handleColorChange} />
        <div className="themeColor_2" onClick={handleColorChange2} />
        <div className="themeColor_3" onClick={handleColorChange3} />
        <div className="themeColor_4 " onClick={handleColorChange4} />
        <div className="themeColor_5" onClick={handleColorChange5} />
      </div>
    </>
  );
};

export default ModalColors;
