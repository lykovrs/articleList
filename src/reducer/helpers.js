import { Record, Map } from "immutable";

export const DefaulrReducerState = new Record({
  isLoading: false,
  allArticles: new Map({})
});
