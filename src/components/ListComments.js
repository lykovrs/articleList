import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";
import PropTypes from "prop-types";

class ListComments extends Component {
  static propTypes = {
    show: PropTypes.bool,
    toggleOpen: PropTypes.func,
    comment: PropTypes.array
  };

  render() {
    const { toggleOpen, show } = this.props;
    return (
      <div>
        <button onClick={toggleOpen}>{show ? "hide" : "show"} comments</button>
        {this.getComments()}
      </div>
    );
  }

  getComments() {
    if (!this.props.show) return null;
    return this.props.comments.map(comment => {
      return <Comment comment={comment} key={comment.id} />;
    });
  }
}

export default toggleOpen(ListComments);
