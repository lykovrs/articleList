import React, { Component } from "react";
import { articles } from "./../fixtures";
import Article from "./Article";
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";

class ListArticles extends Component {
  static propTypes = {
    isOpen: PropTypes.string,
    toggleOpen: PropTypes.func
  };
  render() {
    const articleElements = articles.map(article => {
      return (
        <Article
          article={article}
          key={article.id}
          isOpen={this.props.openItemId === article.id}
          toggleOpen={this.props.openItem(article.id)}
        />
      );
    });
    return <ul>{articleElements}</ul>;
  }
}

export default accordion(ListArticles);
