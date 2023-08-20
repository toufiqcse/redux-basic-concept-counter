import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer/rootReducer";
import myLogger from "../middlewares/myLogger";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);

export default store;
