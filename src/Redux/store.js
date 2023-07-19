import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import { LoginReducer } from "./LoginReducer/reducer";

import { reducer as OEM_Reducer } from "./oem/reducer";

const mainReducer = combineReducers({
 
  LoginReducer,
  OEM_Reducer,

});


export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));