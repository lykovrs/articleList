import React, { Component } from "react";

export default Component =>
  class Accordion extends Component {
    state = {
      openItemId: null
    };

    render() {
      return (
        <Component {...this.props} {...this.state} openItem={this.openItem} />
      );
    }

    openItem = openItemId => ev => {
      console.log("openItem");
      this.setState({
        openItemId: this.state.openItemId !== openItemId ? openItemId : null
      });
    };
  };
