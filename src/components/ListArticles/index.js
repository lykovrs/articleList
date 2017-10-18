import React, { Component } from "react";

import Article from "./../Article/index";
import accordion from "./../../decorators/accordion";
import PropTypes from "prop-types";

import { connect } from "react-redux";

class ListArticles extends Component {
  static propTypes = {
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
  };

  render() {
    const { from, to } = this.props.range;
    const { selected, articles } = this.props;
    let articleElements = [];

    if (!from && !to) {
      articleElements = articles;
    }

    if (from && to) {
      articleElements = articles.filter(item => {
        return +from <= item.date && item.date <= +to;
      });
    }

    if (selected.length) {
      articleElements = articles.filter(article => {
        return selected.some(item => {
          return article.id == item.value;
        });
      });
    }

    let articleNodes = articleElements.map(article => {
      return (
        <Article
          article={article}
          key={article.id}
          isOpen={this.props.isOpen(article.id)}
          toggleOpen={this.props.openItem(article.id)}
        />
      );
    });
    return <ul>{articleNodes}</ul>;
  }
}

export default connect(state => {
  return {
    articles: state.articles,
    range: state.filters.dateRange,
    selected: state.filters.selected
  };
}, {})(accordion(ListArticles));
