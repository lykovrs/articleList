import React, { Component } from "react";
import ListComments from "./../ListComments/index";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./style.css";

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.func,
    toggleOpen: PropTypes.func
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <article>
        <h2 onClick={toggleOpen}>{article.title}</h2>
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

  getBody() {
    if (!this.props.isOpen()) return null;
    return (
      <div>
        {this.props.article.text} {this.getComments()}
      </div>
    );
  }

  getComments() {
    const comments = this.props.article.comments
      ? this.props.article.comments
      : [];
    return <ListComments comments={comments} />;
  }
}

export default Article;
