import React from "react";
/** router 路由器，route 线路 */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 将下面无状态组件注释
import Index from "./Pages/Index";
import List from "./Pages/List";

// 重定向,目标
import Home from "./Pages/Home";

// 下面写一个无状态组件（无状态组件其实就是一个方法，匿名方法或有名方法都行）

// function Index() {
//   return <h2>orrz.work</h2>;
// }

// function List() {
//   return <h2>List-page</h2>;
// }

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/List/1234">列表</Link>
        </li>
      </ul>
      {/* exact 精准匹配的意思 */}
      <Route path="/" exact component={Index} />
      <Route path="/List/:id" component={List} />
      <Route path="/Home" component={Home} />
    </Router>
  );
}

export default AppRouter;
