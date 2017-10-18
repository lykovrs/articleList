import { combineReducers } from "redux";
import filters from "./filters";
import articles from "./article";

export default combineReducers({
  articles,
  filters
});
