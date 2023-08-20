const { combineReducers } = require("redux");
const { default: counterReducer } = require("../counter/counterReducers");
const {
  default: dynamicCounterReducer,
} = require("../dynamicCounter/dynamicReducerCounter");

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
