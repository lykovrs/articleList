import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";

class ListComments extends Component {
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
