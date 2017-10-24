import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../AC";

/**
 * Компонент формы добавления комментария в список комментариев
 */
class AddComment extends Component {
  state = {
    userName: "",
    userText: ""
  };

  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>New comment</p>

        <label>
          Name<input
            type="text"
            name="userName"
            onChange={this.handleInput}
            value={this.state.userName}
          />
        </label>

        <label>
          Comment
          <input
            type="textarea"
            name="userText"
            onChange={this.handleInput}
            value={this.state.userText}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }

  /**
   * Обрабатываем ввод в поля формы и отправляем в стэйт
   * @param  {[type]} ev Event
   */
  handleInput = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  /**
   * Обработка отправки формы
   * @param  {[type]} ev [description]
   */
  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      userName: "",
      userText: ""
    });
    this.props.addComment({
      user: ev.target.userName.value,
      text: ev.target.userText.value,
      articleId: this.props.articleId
    });
  };
}

export default connect(null, { addComment })(AddComment);
