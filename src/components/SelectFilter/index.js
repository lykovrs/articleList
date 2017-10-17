import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import { selectArticles } from "../../AC";

class SelectFilter extends Component {
  state = {
    selected: null,
    options: []
  };

  render() {
    // const options =

    return (
      <Select
        onClick={this.handleClick}
        name="form-field-name"
        value={this.state.selected}
        options={this.state.options}
        onChange={this.handleSelect}
        multi={true}
      />
    );
  }

  handleSelect = value => {
    this.setState({ selected: value });
    this.props.selectArticles(value);
  };

  handleClick = ev => {
    this.setState({
      options: this.props.articles.map(article => {
        return {
          label: article.title,
          value: article.id
        };
      })
    });
  };
}

export default connect(
  state => {
    return { articles: state.articles };
  },
  { selectArticles }
)(SelectFilter);
