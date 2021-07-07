import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store);
    console.log(store.getState());
    /* 关键代码把store中的数据复制到state中 */
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div>
          <Input placeholder="tianxie" style={{ width: "250px" }} />
          <Button type="primary">增加</Button>
        </div>

        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

const data = ["早上", "中午", "晚上"];

export default TodoList;
