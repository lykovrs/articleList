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
  comments: []
});

const defaultState = new DefaulrReducerState();

/**
 * Редьюсер для спистк статей
 * @param  {object} [state] Десереализуем список статей и делаем значение по умолчанию
 * @param  {object} action обект экшена
 * @return {array}  Список статей
 */
export default (state = defaultState, action) => {
  const { type, payload, allArticles } = action;

  switch (type) {
    case LOAD_ALL_ARTICLES + START:
      return state.set("isLoading", true);
      break;
    case LOAD_ALL_ARTICLES + SUCCESS:
      return state
        .set("isLoading", false)
        .set("allArticles", arrayToMap(allArticles, ArticleModel));
      break;

    case LOAD_ARTICLE + START:
      return state.set("isLoading", true);
      break;

    case LOAD_ARTICLE + SUCCESS:
      return state
        .set("isLoading", false)
        .setIn(["allArticles", payload.id, "text"], "text");

      break;
    case DELETE_ARTICLE:
      return state.deleteIn(["allArticles", payload.id]);
      break;

    case ADD_COMMENT:
      const { randomId } = action;
      const { articleId } = payload.newComment;

      console.log("ADD_COMMENT ===>", payload, randomId);

      return state.updateIn(["allArticles", articleId, "comments"], comments =>
        comments.concat(randomId)
      );
      break;

    default:
      return state;
  }
};
