import React, { Component } from "react";

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
