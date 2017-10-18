import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import { selectArticles } from "../../AC";

class SelectFilter extends Component {
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.props.selected}
        options={this.props.articles.map(article => {
          return { label: article.title, value: article.id };
        })}
        onChange={this.handleSelect}
        multi={true}
      />
    );
  }

  handleSelect = value => {
    this.props.selectArticles(value);
  };
}

export default connect(
  state => {
    return { articles: state.articles, selected: state.filters.selected };
  },
  { selectArticles }
)(SelectFilter);
