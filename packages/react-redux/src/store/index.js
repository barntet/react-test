import { createStore } from "redux"; // 从redux中引入createSrote
// 创建好reducers后引入index中，以参数的形式传给store
import reducer from "./reducer";
const store = createStore(
  reducer,
  // 添加redux DevTools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // 创建数据存储仓库

export default store; // 暴露出去
