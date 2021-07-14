import * as redux from "redux";

export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export const PUSH = "PUSH";
export const POP = "POP";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const testerReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH:
      const data_push = [...state];
      data_push.push(action.value);
      return [...data_push];

    case POP:
      const data_pop = [...state];
      data_pop.pop();
      return [...data_pop];

    default:
      return state;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
    tester: testerReducer(state.tester, action),
  };
};
const store = redux.createStore(rootReducer);
export default store;