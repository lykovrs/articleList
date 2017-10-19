import React, { Component } from "react";

/**
 * Компонент формы добавления комментария в список комментариев
 */
class FormComment extends Component {
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
            onChange={this.handleIput}
            value={this.state.userName}
          />
        </label>

        <label>
          Comment<input
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
  };
}

export default FormComment;
