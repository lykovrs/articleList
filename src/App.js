import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListArticles from "./components/ListArticles/index";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { articles } from "./fixtures";
import DateRangeChanger from "./components/DateRangeChanger/index";

class App extends Component {
  state = {
    selected: null
  };

  render() {
    const options = articles.map(article => {
      return {
        label: article.title,
        value: article.id
      };
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hello!</p>
        <DateRangeChanger />

        <Select
          name="form-field-name"
          value={this.state.selected}
          options={options}
          onChange={this.handleSelect}
        />
        <ListArticles articles={articles} />
      </div>
    );
  }

  handleSelect = value => {
    this.setState({ selected: value });
  };
}

export default App;
