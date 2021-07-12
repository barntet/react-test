import { actionType } from "./actionType";
import axios from "axios";

export const getTodoList = () => {
  // const data = await axios.post("http://orrz.work:8800/postData", {
  //   list: ["早上", "中午", "下午", "晚"],
  // });
  // return data;
  return (dispatch) => {
    axios
      .post("http://orrz.work:8800/postData", {
        list: ["早上", "中午", "下午", "晚"],
      })
      .then((res) => {
        const action = getListAction(res.data);
        return dispatch(action); // 这里的dispatch还没明白
      });
  };
};

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

// 为reudx-saga中间件添加一个action
export const getMyListAction = () => ({
  type: actionType.GET_MY_LIST,
});
