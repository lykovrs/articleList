import React from "react";
import { articles } from "./../fixtures";
import Article from "./Article";

const ListArticles = props => {
  const articleElements = articles.map(article => {
    return <Article article={article} key={article.id} />;
  });
  return <ul>{articleElements}</ul>;
};

export default ListArticles;
