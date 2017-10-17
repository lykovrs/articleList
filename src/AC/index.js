import { DELETE_ARTICLE, SELECT_FILTER, CHANGE_DATE_RANGE } from "../constants";

export function deleteArticle(id) {
  const action = {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };

  return action;
}

export function selectArticles(selectedArticles) {
  const action = {
    type: SELECT_FILTER,
    payload: {
      selectedArticles
    }
  };

  return action;
}

export function changeDateRangeArticles(range) {
  const action = {
    type: CHANGE_DATE_RANGE,
    payload: {
      range
    }
  };

  return action;
}
