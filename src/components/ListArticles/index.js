import React, { Component } from "react";
import Article from "./../Article/index";
import accordion from "./../../decorators/accordion";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
    return <ul>{articleNodes}</ul>;
  }
}

export default connect(state => {
  const { from, to } = state.filters.dateRange;
  const { selected } = state.filters;
  const { articles } = state;
  let articleElements = [];

  /**
   * Если нет параметров для фильтрации, просто отдаем все статьи
   * @param  {Date} from Начало периода фильра дат
   * @param  {Date} to   Конец период фильтра дат
   */
  if (!from && !to) {
    articleElements = articles;
  }

  if (from && to) {
    articleElements = articles.filter(item => {
      return +from <= item.date && item.date <= +to;
    });
  }
  /**
   * Если есть значения в массиве выбранных значений селекта, филтьруем записи
   * @param  {Object[]} selected Значение фильтра выбранных статей из селекта
   */
  if (selected.length) {
    articleElements = articles.filter(article => {
      return selected.some(item => {
        return article.id == item.value;
      });
    });
  }

  return {
    articles: articleElements
  };
}, {})(accordion(ListArticles));
