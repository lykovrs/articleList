import React, { Component } from "react";

class FormComment extends Component {
  state = {
    userName: "",
    userText: ""
  };

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
            onChange={this.handleIput}
            value={this.state.userText}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }

  handleIput = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    console.log(this.state);
    this.setState({
      userName: "",
      userText: ""
    });
  };
}

export default FormComment;
