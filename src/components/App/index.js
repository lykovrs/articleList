import React, { Component } from "react";
import logo from "../../logo.svg";
import "./style.css";
import ListArticles from "../ListArticles";
import SelectFilter from "../SelectFilter";
import DateRangeChanger from "../DateRangeChanger";
import Counter from "../Counter";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hello!</p>
        <DateRangeChanger />

        <Counter />

        <SelectFilter />

        <ListArticles articles={this.props.articles} />
      </div>
    );
  }
}

export default connect(state => {
  return { articles: state.articles };
}, {})(App);
