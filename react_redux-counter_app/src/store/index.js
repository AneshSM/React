// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

/*
old Redux 

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
*/

export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
