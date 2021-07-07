import React, { Component } from "react";

class App extends Component {
  render() {
    //     return <div>Hello Jack</div>;
    return (
      <ul className="my-list">
        <li>{false ? "jack" : "peter"}</li>
        <li>hello1</li>
      </ul>
    );
  }
}

export default App;
