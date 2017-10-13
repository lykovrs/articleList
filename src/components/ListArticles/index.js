import React, { Component } from "react";

import Article from "./../Article/index";
import accordion from "./../../decorators/accordion";
import PropTypes from "prop-types";

class ListArticles extends Component {
  static propTypes = {
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
  };

  render() {
    const articleElements = this.props.articles.map(article => {
      return (
        <Article
          article={article}
          key={article.id}
          isOpen={this.props.isOpen(article.id)}
          toggleOpen={this.props.openItem(article.id)}
        />
      );
    });
    return <ul>{articleElements}</ul>;
  }
}

export default accordion(ListArticles);
