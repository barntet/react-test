import React, { Component } from "react";
// import "antd/dist/antd.css";
// import { Input, Button, List } from "antd"; // 下面将ui组件进行抽离
import TodoListUI from "./TodoListUI";
import store from "./store";
// import { actionType } from "./store/actionType"; // 下面通过抽离所以这里不需要使用了
import {
  inputValueAction,
  addItemAction,
  deleteItemAction,
} from "./store/actionCreatores";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store);
    // console.log(store.getState());
    /* 关键代码把store中的数据复制到state中 */
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    // this.deleteListItem = this.deleteListItem.bind(this);
    store.subscribe(this.storeChange); // 订阅redux的状态,这里还得注意如果input的value绑定了state的inputValue那么这个订阅必须加上
  }

  async componentDidMount() {
    const a = await axios({
      url: "http://orrz.work:8800/postData",
      method: "POST",
      body: { list: [1, 2, 3] },
    });
    console.log(a);
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    // const action = {
    //   type: actionType.INPUT_VALUE,
    //   value: e.target.value,
    // };
    // 这里将action抽离出来，方便管理
    // const action = inputValueAction(e.target.value);
    store.dispatch(inputValueAction(e.target.value)); // 这里通过dispatch 将action传入store中
  }

  clickBtn() {
    // const action = { type: actionType.ADD_ITEM };
    // 这里将action抽离出来，方便管里
    store.dispatch(addItemAction());
  }

  deleteItem(index) {
    // console.log(this);
    // const action = { type: actionType.DELETE_ITEM, index };
    store.dispatch(deleteItemAction(index));
  }

  // render() {
  //   return (
  //     <div>
  //       <div>
  //         <Input
  //           placeholder="tianxie"
  //           style={{ width: "250px" }}
  //           onChange={this.changeInputValue}
  //           value={this.state.inputValue}
  //         />
  //         <Button type="primary" onClick={this.clickBtn}>
  //           增加
  //         </Button>
  //       </div>

  //       <List
  //         bordered
  //         dataSource={this.state.list}
  //         renderItem={(item, index) => (
  //           <List.Item onClick={() => this.deleteListItem(index)}>
  //             {item}
  //           </List.Item>
  //         )}
  //       />
  //     </div>
  //   );
  // }
  // 下面进行ui组件抽离

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}

// const data = ["早上", "中午", "晚上"];

export default TodoList;
