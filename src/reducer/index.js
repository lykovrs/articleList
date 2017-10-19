import { combineReducers } from "redux";
import filters from "./filters";
import articles from "./articles";
import comments from "./comments";

/**
 * Подключение редьюсеров
 */
export default combineReducers({
  articles,
  comments,
  filters
});
