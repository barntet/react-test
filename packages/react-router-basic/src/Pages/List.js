import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match);
    const listId = this.props.match.params.id;
    this.setState({ id: listId });
  }
  render() {
    return <h2>list-page</h2>;
  }
}

export default List;
