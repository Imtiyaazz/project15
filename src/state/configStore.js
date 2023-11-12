import { createStore, combineReducers } from "redux";
import { categoryReducer } from "./reducer/categoryReducer";
import { greetingReducer } from "./reducer/greetingReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ categoryReducer, greetingReducer }),   // reducer file
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
