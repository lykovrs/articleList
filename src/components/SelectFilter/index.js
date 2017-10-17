import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import { selectArticles } from "../../AC";

class SelectFilter extends Component {
  state = {
    selected: null
  };

  render() {
    const options = this.props.articles.map(article => {
      return {
        label: article.title,
        value: article.id
      };
    });

    return (
      <Select
        name="form-field-name"
        value={this.state.selected}
        options={options}
        onChange={this.handleSelect}
        multi={true}
      />
    );
  }

  handleSelect = value => {
    this.setState({ selected: value });
    this.props.selectArticles(value);
  };
}

export default connect(
  state => {
    return { articles: state.articles };
  },
  { selectArticles }
)(SelectFilter);
