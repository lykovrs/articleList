import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from "../constants";
import { arrayToMap } from "../utils";
import { Record } from "immutable";
import { DefaulrReducerState } from "./helpers";

const CommentModel = new Record({
  id: null,
  user: null,
  text: null
});

const defaultState = new DefaulrReducerState();

export default (state = defaultState, action) => {
  const { type, payload, collection, randomId } = action;
  switch (type) {
    case LOAD_COMMENTS + START:
      console.log("load comments START reducer =>>", action);
      return state.set("isLoading", true);

    case LOAD_COMMENTS + SUCCESS:
      console.log("load comments SUCCESS reducer =>>", action);
      return state.set("isLoading", false).set("collection", collection);

    case ADD_COMMENT:
      console.log("payload", payload, state);
      return state.setIn(["collection", "records"], comments =>
        comments.concat({ id: randomId, user: "dddd", text: "ddf f fd df" })
      );

    default:
      return state;
  }
};
