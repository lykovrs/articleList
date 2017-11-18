import React, { Component } from "react";
import ListArticles from "../../components/ListArticles";
import SelectFilter from "../../components/SelectFilter";
import DateRangeChanger from "../../components/DateRangeChanger";

class NewsPage extends Component {
  render() {
    return (
      <div>
        <h1>News page</h1>

        <SelectFilter />
        <DateRangeChanger />
        <ListArticles />
      </div>
    );
  }
}

export default NewsPage;
