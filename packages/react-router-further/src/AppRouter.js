import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from "./Pages/Index";
import "./index.css";

// 下面引入video
import Video from "./Pages/video";

// 下面引入work-place
import WorkPlace from "./Pages/work-place";

let routeConfig = [
  { path: "/", title: "博客首页", exact: true, component: Index },
  { path: "/video/", title: "视频教程", exact: false, component: Video },
  {
    path: "/work-place/",
    title: "职场技能",
    exact: false,
    component: WorkPlace,
  },
];

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          {/* <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/video">博客视频</Link>
            </li>
            <li>
              <Link to="/work-place">技能</Link>
            </li>
          </ul> */}

          {/* 下面通过动态的形式进行展示 */}
          <ul>
            {routeConfig.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightMain">
          {/* <Route path="/" exact component={Index} />
          <Route path="/video/" component={Video} />
          <Route path="/work-place/" component={WorkPlace} /> */}
          {routeConfig.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
