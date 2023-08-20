import rootReducer from "../rootReducer/rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action : ${JSON.stringify(action)}`);
  console.log(`Before : ${JSON.stringify(store.getState())}`);

  //   upcomming state
  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcomming State: ${JSON.stringify(upcommingState)}`);
  //   pass the action
  next(action);
};

export default myLogger;
