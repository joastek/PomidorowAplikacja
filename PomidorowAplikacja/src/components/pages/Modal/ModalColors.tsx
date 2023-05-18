import colors from "./ModalColors.module.css";
import { useContext } from "react";
import { BackgroundColorContext } from "../../models/Background";
const ModalColors = () => {
  const { setBackgroundColor }: any = useContext(BackgroundColorContext);
  const black = "purple";
  const themeColor2 = "#0bb362";

  const handleColorChange = () => {
    setBackgroundColor(black);
  };
  const handleColorChange2 = () => {
    setBackgroundColor(themeColor2);
  };
  return (
    <>
      <div className={colors.colorContainer}>
        <div className={colors.themeColor_1} onClick={handleColorChange} />
        <div className={colors.themeColor_2} onClick={handleColorChange2} />
        <div className={colors.themeColor_3} />
        <div className={colors.themeColor_4} />
        <div className={colors.themeColor_5} />
      </div>
    </>
  );
};

export default ModalColors;
