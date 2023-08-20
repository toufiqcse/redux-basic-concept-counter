import { DDECREMENT, DINCREMENT } from "./dynamicActionTypes";

export const dyIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
export const dyDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};
