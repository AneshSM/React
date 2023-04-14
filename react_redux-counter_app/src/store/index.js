import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT")
    return { counter: state.counter + 1, showCounter: state.showCounter };
  if (action.type === "DECREMENT")
    return { counter: state.counter - 1, showCounter: state.showCounter };
  if (action.type === "INCREASE-BY-AMOUNT")
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  if (action.type === "TOGGLE") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
