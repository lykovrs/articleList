import { makeid } from "../utils";

export default store => next => action => {
  const { generatedId, ...rest } = action;
  if (!generatedId) next(action);

  next({ ...rest, randomId: makeid(10) });
};
