import {
  DELETE_ARTICLE,
  SELECT_FILTER,
  CHANGE_DATE_RANGE,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS,
  FAIL
} from "../constants";
import { arrayToMap } from "../utils";

const defaultState = {
  isLoading: false,
  entities: {}
};

/**
 * Редьюсер для спистк статей
 * @param  {object} [state] Десереализуем список статей и делаем значение по умолчанию
 * @param  {object} action обект экшена
 * @return {array}  Список статей
 */
export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return { ...state, isLoading: true };
      break;
    case LOAD_ALL_ARTICLES + SUCCESS:
      return {
        ...state,
        entities: arrayToMap(action.allArticles),
        isLoading: false
      };
      break;
    case DELETE_ARTICLE:
      delete state.entities[payload.id];
      return Object.assign({}, state);
      break;

    default:
      return state;
  }
};
