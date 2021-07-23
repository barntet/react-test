import React, { Component, Fragment } from "react";

// 动态传值需要用的Link,,,,,,,引入redirect 进行重定向
import { Link, Redirect } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { uid: 123, title: "我的个人博客-1" },
        { uid: 456, title: "我的个人博客-2" },
        { uid: 789, title: "我的个人博客-3" },
      ],
    };
    // 编程式重定向
    this.props.history.push("/home/");
  }
  render() {
    return (
      <Fragment>
        {/* <Redirect to="/Home" /> */}
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              <Link to={`/List/${item.uid}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Index;
