import React, { Component } from "react";
import Article from "../Article";
import accordion from "./../../decorators/accordion";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { filteredArticlesSelector } from "../../selectors";
import Preloader from "../Preloader";
import { withRouter } from "react-router-dom";

/**
 * Компонент списка статей c декоратором accordion
 */
class ListArticles extends Component {
  static propTypes = {
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    console.log("===++> 2");
    let articleNodes = this.props.articles.map(article => {
      return (
        <Article
          article={article}
          key={article.id}
          isOpen={this.props.isOpen(article.id)}
          toggleOpen={this.props.openItem(article.id)}
        />
      );
    });
    return (
      <section>
        <ul>{articleNodes}</ul> {this.getPreloader()}
      </section>
    );
  }
  /**
   * Загружаем прелоадер, если loading
   * @return {ReactElement} разметка
   */
  getPreloader() {
    if (this.props.loading) return <Preloader />;
    return null;
  }
}

export default withRouter(
  connect(state => {
    return {
      articles: filteredArticlesSelector(state),
      loading: state.articles.isLoading
    };
  }, {})(accordion(ListArticles))
);
