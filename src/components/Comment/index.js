import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * Компонент комментария для списка
 */
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
  const { comments } = state;
  const id = props.commentId;

  return {
    comment: comments[id]
  };
}, {})(Comment);
