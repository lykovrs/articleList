import React, { Component } from "react";
import "./style.css";
import Header from "../Header";
import MainMenu from "../MainMenu";
import { connect } from "react-redux";
import { filteredArticlesSelector } from "../../selectors";
import { callAllArticles } from "../../AC";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "../../pages/Home";
import NewsPage from "../../pages/News";
import AboutPage from "../../pages/About";
import EmptyPage from "../../pages/Empty";
import ArticlePage from "../../pages/Article";

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
  /**
   * Делаем запрос всех статей с сервера
   */
  componentDidMount() {
    this.props.callAllArticles();
  }
}

export default withRouter(
  connect(
    state => {
      return {
        articles: filteredArticlesSelector(state),
        loading: state.articles.isLoading
      };
    },
    { callAllArticles }
  )(App)
);
