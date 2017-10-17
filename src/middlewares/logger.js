export default store => next => action => {
  console.log("before --->  : ", store.getState(), action);

  next(action);

  console.log("after --->  : ", store.getState(), action);
};
