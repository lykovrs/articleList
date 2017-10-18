import {
  DELETE_ARTICLE,
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE
} from "../constants";

// Article
export function deleteArticle(id) {
  const action = {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };

  return action;
}

export function selectArticles(selected) {
  const action = {
    type: CHANGE_SELECTION,
    payload: {
      selected
    }
  };

  return action;
}

export function changeDateRange(dateRange) {
  const action = {
    type: CHANGE_DATE_RANGE,
    payload: {
      dateRange
    }
  };

  return action;
}
