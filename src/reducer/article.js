import { DELETE_ARTICLE, SELECT_FILTER } from "../constants";
import { articles as defaultArticles } from "../fixtures";

export default (articles = defaultArticles, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => payload.id !== article.id);
      break;

    case SELECT_FILTER:
      return articles.map(article => {
        article.hidden = false;
        payload.selectedArticles.forEach(item => {
          if (item.value === article.id) article.hidden = true;
        });
        console.log(article);
        return article;
      });
      break;
    default:
      return articles;
  }
};
