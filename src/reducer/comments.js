import { normalizedComments as defaultComments } from "../fixtures";

export default (comments = defaultComments, action) => {
  const { type, payload } = action;
  switch (type) {
    // case DELETE_ARTICLE:
    //   return articles.filter(article => payload.id !== article.id);
    //   break;

    default:
      return comments;
  }
};
