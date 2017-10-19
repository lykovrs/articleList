import { normalizedComments as defaultComments } from "../fixtures";

/**
 * Редьюсер списка комментариев
 * @param  {array} [comments=defaultComments] массив комментариев и начальное значение
 * @param  {[Object} action                     обект экшена
 * @return {array}                            список комментариев
 */
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
