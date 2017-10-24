import {
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  ADD_COMMENT
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

/**
 * Создает экшн для запроса всех статей
 * @return {object} объект экшена
 */
export function callAllArticles() {
  const action = {
    type: LOAD_ALL_ARTICLES,
    callAPI: "http://localhost:3001/api/article"
  };

  return action;
}

/**
 * Создает экшн для запроса текста статьи
 * @return {object} объект экшена
 */
export function loadArticle(id) {
  const action = {
    type: LOAD_ARTICLE,
    payload: { id },
    callAPI: `http://localhost:3001/api/article/${id}`
  };

  return action;
}

/**
 * Создает экшн добавления комментария
 * @param  {object} newComment объект с полями нового комментария
 * @return {object}            объект экшена
 */
export function addComment(newComment) {
  const action = {
    type: ADD_COMMENT,
    payload: {
      newComment
    },
    generatedId: true
  };

  return action;
}
