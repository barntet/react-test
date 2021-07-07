// 虽然建立好了store，但是仓库很乱，所以现在需要建立一个reducers，也就是有管理能力的模块
const defaultState = {
  inputValue: "",
  list: ["早", "中", "晚"],
}; // 默认数据

const reducer = (state = defaultState) => {
  // 就是一个方法函数
  return state;
};

export default reducer;
