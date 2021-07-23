import React from "react";
import { Route, Link } from "react-router-dom";
import ReactPage from "./Video/react-page";
import FlutterPage from "./Video/flutter-page";
import VuePage from "./Video/vue-page";

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/react-page">react-page</Link>
          </li>
          <li>
            <Link to="/video/flutter-page">flutter-page</Link>
          </li>
          <li>
            <Link to="/video/vue-page">vue-page</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h3> 视频教程</h3>
          <Route path="/video/react-page" component={ReactPage} />
          <Route path="/video/flutter-page" component={FlutterPage} />
          <Route path="/video/vue-page" component={VuePage} />
        </div>
      </div>
    </div>
  );
}

export default Video;
