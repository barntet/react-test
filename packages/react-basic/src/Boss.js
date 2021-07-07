import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
    this.toToggole = this.toToggole.bind(this);
  }
  toToggole() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    return (
      <div>
        {/* 通过react-transition-group来实现动画 */}
        <CSSTransition
          in={this.state.isShow} // 用于判断是否出现
          timeout={2000} // 动画持续时间
          classNames="boss-text" // className值，防止重复
          unmountOnExit // 元素退场时自动把DOM删除
        >
          {/* <div className={this.state.isShow ? "show" : "hide"}>boss</div> */}
          <div>boss</div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggole}>点击添加</button>
        </div>
      </div>
    );
  }
}

export default Boss;
