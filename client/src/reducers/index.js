import { combineReducers } from "redux";
import card from "./card";
import deck from "./deck";
import profile from "./profile";

export default combineReducers({
  card,
  deck,
  profile
});
