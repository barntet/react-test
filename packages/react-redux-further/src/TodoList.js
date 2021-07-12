import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

// 引入react-redux的连接器 connect
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  // inputChange(value){
  //   this.
  // }

  render() {
    return (
      <Fragment>
        <Input
          placeholder="tianxie"
          style={{ width: "250px" }}
          value={this.props.inputValue}
          onChange={this.props.inputChange}
        />
        <Button type="primary" onClick={this.props.clickBtn}>
          添加
        </Button>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.props.deleteItem}>{item}</List.Item>
          )}
        />
      </Fragment>
    );
  }
}

// export default TodoList;

// 因为用connect连接器，所以需要制作一个映射关系
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// 修改数据
const dispatchToProps = (dispatch) => {
  // return {
  //   inputChange(e) {
  //     console.log(e);
  //   },
  // };
  // 派发store到action
  return {
    // input事件
    inputChange(e) {
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
    },

    // button事件
    clickBtn() {
      let action = {
        type: "addItem",
      };
      dispatch(action);
    },

    // 删除事件
    deleteItem(index) {
      let action = {
        type: "deleteItem",
        index,
      };
      dispatch(action);
    },
  };
};

// 引入了连接器这时候需要这样导出
// export default connect(stateToProps, null)(TodoList);
// 第二个参数就是用来传入dispatch的
export default connect(stateToProps, dispatchToProps)(TodoList);
