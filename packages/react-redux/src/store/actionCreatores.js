import { actionType } from "./actionType";

export const inputValueAction = (value) => ({
  type: actionType.INPUT_VALUE,
  value,
});

export const addItemAction = () => ({
  type: actionType.ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: actionType.DELETE_ITEM,
  index,
});

// axios getData
export const getListAction = (data) => ({
  type: actionType.GET_LIST,
  data,
});
