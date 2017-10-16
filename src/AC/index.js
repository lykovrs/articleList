import { INCREMENT, DECRIMENT } from "../constants";

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

// export function defaultArticles() {
//   const action = {
//     type: DEFAULT_ARTICLES
//   };
//
//   return action;
// }
