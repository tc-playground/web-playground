import { combineReducers } from "redux";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    dummy: () => { return false; }
});