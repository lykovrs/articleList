import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

/**
 * Корневой элемент с подключением Redux
 */
class Root extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
