import React, { Component } from "react";
import ListComments from "../ListComments";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./style.css";
import { connect } from "react-redux";
import { deleteArticle, loadArticle } from "../../AC";
import Preloader from "../Preloader";

/**
 * Компонент статьи
 */
class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.Date,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      comments: PropTypes.any
    }),
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <article>
        <h2 onClick={toggleOpen}>
          {article.title} <button onClick={this.handleRemove}>Delete</button>
        </h2>
        <ReactCSSTransitionGroup
          transitionName="Article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </article>
    );
  }

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.isOpen() &&
      !this.props.article.isLoaded &&
      !this.props.article.isLoading
    )
      nextProps.loadArticle(nextProps.article.id);
  };

  /**
   * Получаем тело статьи
   * @return {ReactElement} текст статьи и список комментариев
   */
  getBody() {
    const { isOpen, article } = this.props;
    if (!isOpen()) return null;
    if (!article.text) return <Preloader />;
    return (
      <div>
        {this.props.article.text}
        {this.getComments()}
      </div>
    );
  }

  /**
   * Получаем список комментариев
   * @return {ReactElement} список комментариев
   */
  getComments() {
    const comments = this.props.article.comments
      ? this.props.article.comments
      : [];
    return (
      <ListComments comments={comments} articleId={this.props.article.id} />
    );
  }

  /**
   * Удаляем статью
   * @param  {[type]} ev Event
   */
  handleRemove = ev => {
    ev.preventDefault();
    this.props.deleteArticle(this.props.article.id);
  };
}

export default connect(null, { deleteArticle, loadArticle })(Article);
