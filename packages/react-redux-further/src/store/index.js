import { createStore } from "redux";
import reducer from "./reducer";

const enHancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, enHancers);

export default store;
