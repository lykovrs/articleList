import { DELETE_ARTICLE, SELECT_FILTER, CHANGE_DATE_RANGE } from "../constants";
import { normalizedArticles as defaultArticles } from "../fixtures";

export default (
  articles = JSON.parse(JSON.stringify(defaultArticles), (key, value) => {
    if (key == "date") return new Date(value);
    return value;
  }),
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => payload.id !== article.id);
      break;

    default:
      return articles;
  }
};
