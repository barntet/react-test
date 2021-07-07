import React, { Component, Fragment } from "react";
import "./style.css";
import XiaojiejieItem from "./xiaojiejieItem";
import Boss from "./Boss";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Xiaojiejie extends Component {
  constructor(props) {
    console.log("init");
    super(props);
    this.state = {
      inputValue: "jack", // input 的值
      list: ["吃饭", "聊天"], // 服务列表
    };
  }
  inputChange(e) {
    console.log(e);
    console.log(this);
    this.setState({
      // inputValue: e.target.value, // 修改为ref
      inputValue: this.input.value,
    });
  }
  addList(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
    });
  }
  deleteItem(index) {
    console.log(index);
    const list = this.state.list;
    list.splice(index, 1); // splice、split
    this.setState({
      list,
    });
  }

  // componentWillMount() {
  //   console.log("componentWillMount123");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  async componentDidMount() {
    console.log("componentDidMount");
    const data = await axios.get("http://orrz.work:8800/getData", {
      params: { a: 1, b: 2 },
    });
    console.log(data);
    console.log("ending");
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        {
          //正确的注释写法
        }
        <div>
          <label htmlFor="jack">加入服务：</label>
          <input
            id="jack"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {
              this.input = input;
            }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {/*
          {this.state.list.map((item, index) => (
            <li
              key={item + index}
              onClick={this.deleteItem.bind(this, index)}
              //       dangerouslySetInnerHTML={{ __html: item }}}
            >
              {item}
            </li>
          ))}
          */}
          {
            /* {this.state.list.map((item, index) => (
            <XiaojiejieItem
              key={item + index}
              content={item}
              index={index}
              // name={"谁"}
              // 注意这里要this绑定
              deleteItem={this.deleteItem.bind(this)}
            />
          ))} */
            // 加入动画
          }
          <TransitionGroup>
            {this.state.list.map((item, index) => (
              // 这里还需要CSSTransition来定义动画
              <CSSTransition
                timeout={1500}
                classNames="boss-text"
                unmountOnExit
                appear={true}
                key={item + index}
              >
                <XiaojiejieItem
                  key={item + index}
                  content={item}
                  index={index}
                  // name={"谁"}
                  // 注意这里要this绑定
                  deleteItem={this.deleteItem.bind(this)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    );
  }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate123");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillReceiveProps() {
  //   console.log(`componentWillReciveProps${this.index}`);
  // }
}

export default Xiaojiejie;
