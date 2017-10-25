import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * Компонент комментария для списка
 */
const Comment = props => {
  const { comment } = props;
  return (
    <blockquote>
      <b>{comment.user}: </b>
      {comment.text}
    </blockquote>
  );
};

Comment.propTypes = {
  commentId: PropTypes.any,
  comment: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string
  })
};

export default connect((state, props) => {
  const { comments } = state;
  const id = props.commentId;

  return {
    comment: comments.get(id)
  };
}, {})(Comment);
