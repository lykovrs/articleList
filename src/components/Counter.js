import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decriment } from "../AC";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleDercriment}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.handleIncment}>+</button>
      </div>
    );
  }

  handleDercriment = ev => {
    ev.preventDefault();
    this.props.decriment();
  };

  handleIncment = ev => {
    ev.preventDefault();
    this.props.increment();
  };
}

export default connect(
  state => {
    return {
      count: state.count
    };
  },
  { increment, decriment }
)(Counter);
