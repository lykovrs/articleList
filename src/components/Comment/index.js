import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Comment = props => {
  const { comment, commentId } = props;
  return (
    <blockquote>
      <b>{comment.user}: </b>
      {comment.text}
    </blockquote>
  );
};

Comment.propTypes = {
  commentId: PropTypes.number.isRequired,
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default connect((state, props) => {
  let comment = null;
  let comments = state.comments;

  /**
   * Проходим массив комментариев,сохраняем нужный по id
   */
  comments.forEach(item => {
    if (item.id === props.commentId) {
      comment = item;
    }
  });

  return {
    comment
  };
}, {})(Comment);
