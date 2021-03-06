import React, { Component } from "react";
import Comment from "../Comment";
import toggleOpen from "./../../decorators/toggleOpen";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./style.css";
import AddComment from "../AddComment";
import { connect } from "react-redux";
import { callComments } from "../../AC";

/**
 * Компонент списка комментариев с декоратором toggleOpen
 */
class ListComments extends Component {
  static propTypes = {
    show: PropTypes.bool,
    toggleOpen: PropTypes.func,
    comments: PropTypes.any,
    articleId: PropTypes.string.isRequired
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
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
          {this.getAddComments()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  componentWillReceiveProps = nextProps => {
    if (!this.props.loading) nextProps.callComments(nextProps.articleId);
  };

  /**
   * Создает форму добавления комментария
   * @return {ReactElement} компонент формы
   */
  getAddComments = () => {
    if (!this.props.show) return null;
    return <AddComment articleId={this.props.articleId} />;
  };

  /**
   * Генерируем список комментариев
   * @return {ReactElement[]} набор комментариев
   */
  getComments() {
    if (!this.props.show) return null;
    if (this.props.comments.length <= 0) return <p>No comments</p>;
    return this.props.comments.map(id => {
      return <Comment commentId={id} key={id} />;
    });
  }

  /**
   * Получаем DOM элемент
   * @param  {HTMLElement} ref DOM элемент
   * @return {HTMLElement}     DOM элемент
   */
  getListCommentRef(ref) {
    console.log("--> list comments container ", ref);
    return ref;
  }
}

export default connect(
  (state, props) => {
    return {
      loading: state.comments.isLoading
    };
  },
  { callComments }
)(toggleOpen(ListComments));
