import React from "react";

export const ColorContext = React.createContext({
  dotColor: "black",
  setDotColor: (dotColor: string) => {},
});
