// import React, { Component } from "react"; // 修改为无状态组件，这样的效率高于普通react组件
import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import PropTypes from "prop-types";

// class TodoListUI extends Component { // 修改为无状态组件，这样的效率高于普通react组件
//   render() {
const TodoListUI = (props) => {
  // 记得修改为无状态组件后，原来的this.props直接使用props即可
  return (
    <div>
      <div>
        <Input
          placeholder="tianxie"
          style={{ width: "250px" }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button type="primary" onClick={props.clickBtn}>
          增加
        </Button>
      </div>

      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
        )}
      />
    </div>
  );
};
// }

TodoListUI.propTypes = {
  list: PropTypes.array,
  inputValue: PropTypes.string,
  changeInputValue: PropTypes.func,
  clickBtn: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoListUI;
