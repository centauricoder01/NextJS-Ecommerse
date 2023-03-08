import { combineReducers } from "redux";
import cartReducer from "./cartRedux/reducer";
export const rootReducer = combineReducers({
  cartReducer,
});
