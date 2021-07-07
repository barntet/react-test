import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.name}为你-{this.props.content}
      </div>
    );
  }

  handleClick() {
    // 此时就可以调用了
    this.props.deleteItem(this.props.index);
  }

  // componentWillReceiveProps() {
  //   console.log(`componentWillReceiveProps${this.props.index}`);
  // }

  // componentWillUnmount() {
  //   console.log("child - componentWillUnmount");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
    // return true;
  }
}

XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string.isRequired,
};
XiaojiejieItem.defaultProps = {
  name: "wo",
};
export default XiaojiejieItem;
