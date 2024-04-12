import React from "react";

type ColorContextType = {
  dotColor: string;
  setDotColor: (dotColor: string) => void;
};

export const ColorContext = React.createContext<ColorContextType | undefined>(
  undefined,
);
