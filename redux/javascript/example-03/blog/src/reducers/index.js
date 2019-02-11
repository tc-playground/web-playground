import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    // dummy: () => { return false; },
    posts: postsReducer
});