import React, { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

export const Color = (Props) => {
  const [color, dispatch] = useReducer(reducer, "blue");
  console.log(Props);
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {Props.children}
    </ColorContext.Provider>
  );
};
