import { createContext, useState } from "react";

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

export const BackgroundColorProvider = ({ children }: any) => {
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
