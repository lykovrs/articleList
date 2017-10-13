import React, { Component } from "react";

export default Component =>
  class ToggleOpen extends Component {
    state = {
      show: false
    };

    toggleOpen = () => {
      this.setState({ show: !this.state.show });
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
