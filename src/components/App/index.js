import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import MainMenu from "../MainMenu";
import { connect } from "react-redux";

import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/Home";
import NewsPage from "../../pages/News";
import AboutPage from "../../pages/About";
import EmptyPage from "../../pages/Empty";

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
        <Header />
        <MainMenu />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/news" component={NewsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/empty" component={EmptyPage} />
          <Redirect to="/empty" />
        </Switch>
      </div>
    );
  }
}

export default App;
