import {
  DELETE_ARTICLE,
  SELECT_FILTER,
  CHANGE_DATE_RANGE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  ADD_COMMENT
} from "../constants";
import { arrayToMap, mapToArray } from "../utils";
import { Record } from "immutable";
import { DefaulrReducerState } from "./helpers";
//
// const makePerson = Record({ name: null, favoriteColor: 'unknown' });
const ArticleModel = Record({
  id: null,
  date: null,
  title: null,
  text: null,
  comments: [],
  isLoading: false,
  isLoaded: false
});

const defaultState = new DefaulrReducerState();

/**
 * Редьюсер для спистк статей
 * @param  {object} [state] Десереализуем список статей и делаем значение по умолчанию
 * @param  {object} action обект экшена
 * @return {array}  Список статей
 */
export default (state = defaultState, action) => {
  const { type, payload, collection } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return state.set("isLoading", true);
      break;
    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .set("isLoading", false)
        .set("collection", arrayToMap(collection, ArticleModel));
      break;

    case LOAD_ARTICLE + START:
      return state.setIn(["collection", payload.id, "isLoading"], true);
      break;

    case LOAD_ARTICLE + SUCCESS:
      return state
        .setIn(["collection", payload.id, "isLoading"], false)
        .setIn(
          ["collection", payload.id],
          new ArticleModel({ ...collection, isLoaded: true })
        );

      break;
    case DELETE_ARTICLE:
      return state.deleteIn(["collection", payload.id]);
      break;

    case ADD_COMMENT:
      const { randomId } = action;
      const { articleId } = payload.newComment;
      return state.updateIn(["collection", articleId, "comments"], comments =>
        comments.concat(randomId)
      );
      break;

    default:
      return state;
  }
};
