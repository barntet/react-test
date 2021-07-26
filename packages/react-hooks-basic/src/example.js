import React, { Component, Fragment, useEffect } from "react";

// demo1
/*
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div>当前计数{this.state.count}</div>
        <button onClick={this.addCount.bind(this)}>添加</button>
      </div>
    );
  }

  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default Example;
*/

// demo2

/*

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log(`count => ${this.state.count}`);
  }

  componentDidUpdate() {
    console.log(`count => ${this.state.count}`);
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <div>当前计数{this.state.count}</div>
        <button onClick={this.addCount.bind(this)}>click</button>
      </div>
    );
  }
}

export default Example;

*/

// demo 3

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("你好啊，这是index页面");
    return () => console.log("再见啊Index");
  }, []);
  return <div>jack</div>;
}

function List() {
  useEffect(() => {
    console.log("你好啊，这是List页面");
  });
  return <div>List</div>;
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <p>当前{this.state.count}</p>
          <button onClick={this.addCount.bind(this)}>click</button>
        </div>
        <Router>
          <ul>
            <li>
              <Link to="/">index</Link>
            </li>
            <li>
              <Link to="/List">List</Link>
            </li>
          </ul>
          <Route path="/" exact component={Index} />
          <Route path="/List" component={List} />
        </Router>
      </Fragment>
    );
  }
  addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default Example;
