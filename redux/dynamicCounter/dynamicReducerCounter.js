const { DINCREMENT, DDECREMENT } = require("./dynamicActionTypes");

const initialValue = {
  value: 0,
};

const dynamicCounterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
