import React from "react";
import { Route, Link } from "react-router-dom";
import Money from "./workPlace/money";
import Getup from "./workPlace/getup";

function WorkPlace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/work-place/money">Money</Link>
          </li>
          <li>
            <Link to="/work-place/getup">getup</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>hey</h3>
        <Route path="/work-place/money" component={Money} />
        <Route path="/work-place/getup" component={Getup} />
      </div>
    </div>
  );
}

export default WorkPlace;
