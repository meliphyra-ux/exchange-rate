import { createStore, combineReducers } from "redux";
import { userReducer } from "./user";
import { ratesReducer } from "./rates";

const rootReducer = combineReducers({
  user: userReducer,
  rates: ratesReducer,
});

export const store = createStore(rootReducer);
