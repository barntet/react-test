import { actionType } from "./actionType";
// 虽然建立好了store，但是仓库很乱，所以现在需要建立一个reducers，也就是有管理能力的模块
const defaultState = {
  inputValue: "write someThing",
  list: ["早", "中", "晚"],
}; // 默认数据

const reducer = (state = defaultState, action) => {
  // 就是一个方法函数
  // console.log(state); // state指的是原始仓库的状态，action指的是新传递的状态
  // console.log(action); // state指的是原始仓库的状态，action指的是新传递的状态
  // 上能看到旧数据和新数据，下面通过action.type来判断是否正确，正确则声明一个新的变量
  // 这里需要注意Reducer里面只能接受state的值，是不能修改state的值，所以声明一个新的变量，然后返回出去

  if (action.type === actionType.INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state)); //记得要深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === actionType.ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue); // 这里要注意上面已经能实时获取inuteValue，且button这里是没有写值的，所以这里用newState.inputValue
    newState.inputValue = "";
    return newState;
  }
  if (action.type === actionType.DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === actionType.GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.list;
    return newState;
  }
  return state;
};

export default reducer;
