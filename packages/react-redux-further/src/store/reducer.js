const defaultState = {
  inputValue: "js",
  list: [1, 2],
};

// 这里不允许直接到处函数
const reducer = (state = defaultState, action) => {
  if (action.type === "change_input") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === "deleteItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    console.log(action.index);
    console.log(newState.list);
    return newState;
  }
  return state;
};

export default reducer;
