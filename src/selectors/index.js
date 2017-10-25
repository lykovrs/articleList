import { createSelector } from "reselect";
import { mapToArray } from "../utils";

const articlesGetter = state => state.articles.collection;
const filtersGetter = state => state.filters;

export const filteredArticlesSelector = createSelector(
  articlesGetter,
  filtersGetter,
  (collection, filters) => {
    console.log("===++> 1");
    let { from, to } = filters.dateRange;
    const { selected } = filters;
    let articles = mapToArray(collection);

    return articles.filter(item => {
      let date = new Date(item.date);
      if (!from) from = -Infinity;
      if (!to) to = Infinity;

      if (selected.length) {
        return selected.some(selectedItem => {
          return item.id === selectedItem.value;
        });
      }

      return +from <= date && date <= +to;
    });
  }
);
