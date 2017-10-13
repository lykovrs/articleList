import React, { Component } from "react";
import ListComments from "./ListComments";
import PropTypes from "prop-types";

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <article>
        <h2 onClick={toggleOpen}>{article.title}</h2>
        {this.getBody()}
      </article>
    );
  }

  getBody() {
    if (!this.props.isOpen) return null;
    return (
      <div>
        {this.props.article.text} {this.getComments()}
      </div>
    );
  }

  getComments() {
    if (!this.props.article.comments) return null;
    return <ListComments comments={this.props.article.comments} />;
  }
}

export default Article;
