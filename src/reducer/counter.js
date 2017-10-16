import { INCREMENT, DECRIMENT } from "../constants";

export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
      break;

    case DECRIMENT:
      return count - 1;
      break;
    default:
  }

  return count;
};
