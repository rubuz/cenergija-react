import React from "react";

type ColorContextType = {
  dotColor: "black";
  setDotColor: (dotColor: string) => void;
};

export const ColorContext = React.createContext<ColorContextType | undefined>(
  undefined,
);
