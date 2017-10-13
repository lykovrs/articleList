import React, { Component } from "react";
import Comment from "./../Comment/index";
import toggleOpen from "./../../decorators/toggleOpen";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./style.css";

class ListComments extends Component {
  static propTypes = {
    show: PropTypes.bool,
    toggleOpen: PropTypes.func,
    comment: PropTypes.array
  };

  render() {
    const { toggleOpen, show } = this.props;
    return (
      <div ref={this.getListCommentRef}>
        <button onClick={toggleOpen}>{show ? "hide" : "show"} comments</button>
        <ReactCSSTransitionGroup
          transitionName="ListComments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getComments()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  getComments() {
    if (!this.props.show) return null;
    return this.props.comments.map(comment => {
      return <Comment comment={comment} key={comment.id} />;
    });
  }

  getListCommentRef(ref) {
    console.log("--> list comments container ", ref);
  }
}

export default toggleOpen(ListComments);
