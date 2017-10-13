import React, { Component } from "react";

export default Component =>
  class Accordion extends Component {
    state = {
      openItemId: null
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          isOpen={this.isOpen}
          openItem={this.openItem}
        />
      );
    }

    isOpen = id => ev => {
      return id === this.state.openItemId;
    };

    openItem = openItemId => ev => {
      this.setState({
        openItemId: this.state.openItemId !== openItemId ? openItemId : null
      });
    };
  };
