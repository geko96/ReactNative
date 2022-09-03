import { createStore, combineReducers, applyMiddleware } from "redux";


import {
    UserDataReducer,
    CartReducer
} from "./Reducers/index";

const rootReducer = combineReducers({
  User: UserDataReducer,
  Cart: CartReducer,
});

export default createStore(rootReducer);