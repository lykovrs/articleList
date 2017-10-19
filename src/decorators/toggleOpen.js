// eslint-disable-next-line
import React, { Component } from "react";

/**
 * Декоратор тоггла для компонента
 */
export default Component =>
  class ToggleOpen extends Component {
    state = {
      show: false
    };

    /**
     * render
     * @return {ReactElement} разметка
     */
    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    /**
     * Устанавливает состояние, противоположное предыдущему
     */
    toggleOpen = () => {
      this.setState({ show: !this.state.show });
    };
  };
