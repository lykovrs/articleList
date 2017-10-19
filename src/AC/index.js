import {
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE
} from "../constants";

/**
 * Создает экшн удаления стаьи по id
 * @param  {string} id удаляемой статьи
 * @return {object}    объект экшена
 */
export function deleteArticle(id) {
  const action = {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };

  return action;
}
/**
 * Создает экшн выбора статей из селекта
 * @param  {array} selected массив выбранных статей
 * @return {object}         объект экшена
 */
export function selectArticles(selected) {
  const action = {
    type: CHANGE_SELECTION,
    payload: {
      selected
    }
  };

  return action;
}
/**
 * Создает экшн выбора диапазона дат для статей
 * @param  {object} dateRange объект с полями from to диапазона значений
 * @return {object}           объект экшена
 */
export function changeDateRange(dateRange) {
  const action = {
    type: CHANGE_DATE_RANGE,
    payload: {
      dateRange
    }
  };

  return action;
}
