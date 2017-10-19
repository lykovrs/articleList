import { DELETE_ARTICLE, SELECT_FILTER, CHANGE_DATE_RANGE } from "../constants";
import { normalizedArticles as defaultArticles } from "../fixtures";
import { arrayToMap } from "../utils";

let optimized = arrayToMap(defaultArticles); // оптимизируем данные из массива в объект
//превращаем даты в объект Date
optimized = JSON.parse(JSON.stringify(optimized), (key, value) => {
  if (key == "date") return new Date(value);
  return value;
});

/**
 * Редьюсер для спистк статей
 * @param  {object} [articles=optimized] Десереализуем список статей и делаем значение по умолчанию
 * @param  {object} action обект экшена
 * @return {array}  Список статей
 */
export default (articles = optimized, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_ARTICLE:
      delete articles[payload.id];
      return Object.assign({}, articles);
      break;

    default:
      return articles;
  }
};
