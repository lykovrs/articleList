import React, { Component } from "react";
import logo from "../../logo.svg";
import "./style.css";
import ListArticles from "../ListArticles";
import SelectFilter from "../SelectFilter";
import DateRangeChanger from "../DateRangeChanger";

/**
 * Компонент приложения с базовой разметкой
 */
class App extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hello!</p>

        <DateRangeChanger />

        <SelectFilter />

        <ListArticles />
      </div>
    );
  }
}

export default App;
