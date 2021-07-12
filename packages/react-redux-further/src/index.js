import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
// 引入Provider（提供器）
import { Provider } from "react-redux";
import store from "./store";

// 创建一个app组件，然后用provider包裹起来，provider组件内能放多个组件
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

// ReactDOM.render(<TodoList />, document.getElementById("root"));
ReactDOM.render(App, document.getElementById("root"));
