import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";

const rootReducer = combineReducers({
    homeReducer,
    searchReducer
});
  
export default rootReducer;