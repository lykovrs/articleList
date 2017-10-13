import React from "react";
import PropTypes from "prop-types";

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
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
