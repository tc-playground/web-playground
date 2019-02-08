import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    // dummy: () => { return false; },
    posts: postReducer
});