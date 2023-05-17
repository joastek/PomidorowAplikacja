import React, { createContext, useState } from "react";
import classes from "../NavIcons/NavigationBar.module.css";
interface BackgroundColorContextProps {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const defaultBackgroundColor = "";

export const BackgroundColorContext =
  createContext<BackgroundColorContextProps>({
    backgroundColor: defaultBackgroundColor,
    setBackgroundColor: () => {},
  });

export const BackgroundColorProvider: React.FC = ({ children }: any) => {
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};
