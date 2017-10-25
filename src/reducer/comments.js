import { ADD_COMMENT } from "../constants";
import { normalizedComments as defaultComments } from "../fixtures";
import { arrayToMap } from "../utils";

const optimized = arrayToMap(defaultComments); // оптимизируем данные из массива в объект

/**
 * Редьюсер списка комментариев
 * @param  {array} [comments=optimized] массив комментариев и начальное значение
 * @param  {[Object} action                     обект экшена
 * @return {array}                            список комментариев
 */
export default (comments = optimized, action) => {
  const { type, payload, randomId } = action;
  switch (type) {
    case ADD_COMMENT:
      return comments.set(randomId, payload.newComment);

    default:
      return comments;
  }
};
