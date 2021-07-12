import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { actionType } from "./actionType";
import { getListAction } from "./actionCreatores";

// generator函数
function* mySaga() {
  yield takeEvery(actionType.GET_MY_LIST, getList);
}

function* getList() {
  console.log("jack");

  const res = yield axios.post("http://orrz.work:8800/postData", {
    list: ["早上", "中午", "下午", "晚"],
  });
  const action = getListAction(res.data);
  yield put(action);
}

export default mySaga;
