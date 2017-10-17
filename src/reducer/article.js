import { DELETE_ARTICLE, SELECT_FILTER, CHANGE_DATE_RANGE } from "../constants";
import { articles as defaultArticles } from "../fixtures";

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

    case SELECT_FILTER:
      return articles.map(article => {
        article.selectedSelect = false;
        payload.selectedArticles.forEach(item => {
          if (item.value === article.id) article.selectedSelect = true;
        });
        return article;
      });
      break;

    case CHANGE_DATE_RANGE:
      let { from, to } = payload.range;
      if (!from) from = -Infinity;
      if (!to) to = +Infinity;
      console.log(+from, +to);
      return articles.map(article => {
        console.log(+from, +article.date, +to);
        if (+from <= +article.date && +article.date <= +to) {
          article.selectedDateRange = true;
        } else {
          article.selectedDateRange = false;
        }

        return article;
      });
      break;

    default:
      return articles;
  }
};
