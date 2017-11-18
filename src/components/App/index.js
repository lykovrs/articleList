import React, { Component } from "react";
import "./style.css";
import ListArticles from "../ListArticles";
import SelectFilter from "../SelectFilter";
import DateRangeChanger from "../DateRangeChanger";
import Header from "../Header";
import MainMenu from "../MainMenu";
import { connect } from "react-redux";
import { callAllArticles } from "../../AC";
import { Switch, Route } from "react-router-dom";

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
        <p className="App-intro">Hello!</p>
        <Switch>
          <Route exact path="/" component={DateRangeChanger} />
          {/* Оба /roster и /roster/:number начинаются с /roster */}
          <Route path="/filters" component={SelectFilter} />
          <Route path="/news" component={ListArticles} />
        </Switch>
      </div>
    );
  }

  /**
   * Делаем запрос всех статей с сервера
   */
  componentDidMount() {
    this.props.callAllArticles();
  }
}

export default connect(null, { callAllArticles })(App);
