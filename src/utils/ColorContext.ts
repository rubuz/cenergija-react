import React from "react";

type ColorContextType = {
  dotColor: string;
  setDotColor: (dotColor: string) => void;
};

const defaultColorContext: ColorContextType = {
  dotColor: "#F0D5A0",
  setDotColor: () => {},
};

export const ColorContext =
  React.createContext<ColorContextType>(defaultColorContext);
