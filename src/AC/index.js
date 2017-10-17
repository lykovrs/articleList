import {
  INCREMENT,
  DECRIMENT,
  DELETE_ARTICLE,
  SELECT_FILTER,
  CHANGE_DATE_RANGE
} from "../constants";

export function increment() {
  const action = {
    type: INCREMENT
  };

  return action;
}

export function decriment() {
  const action = {
    type: DECRIMENT
  };

  return action;
}

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
