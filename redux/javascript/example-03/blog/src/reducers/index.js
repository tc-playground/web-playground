import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    // dummy: () => { return false; },
    posts: postsReducer,
    users: usersReducer
});