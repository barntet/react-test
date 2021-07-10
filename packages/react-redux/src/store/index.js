// import { createStore } from "redux"; // 从redux中引入createSrote
import { createStore, applyMiddleware, compose } from "redux"; // 从redux中引入createSrote,, 引入redux-thunk中间件，需要引入applyMiddleware ,, 还有因为需要同时使用redux dev tools 需要引入compoes
import thunk from "redux-thunk";
// 创建好reducers后引入index中，以参数的形式传给store
import reducer from "./reducer";

// 使用compose 创造增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// 有了增强函数，就能串起来了，其实这里只是做了一个判断，因为它们都要放在createStore的第二个参数中
const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  reducer,
  // 添加redux DevTools，，因为需要用到redux-thunk，所以这里做了调整
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(thunk), // 官网教程，现在会报错
  enhancers
); // 创建数据存储仓库

export default store; // 暴露出去
