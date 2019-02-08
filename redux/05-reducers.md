 # Reducers

 ## Introduction

* `reducers` are __contained__ by the `redux store`.

* `reducers` are fed ``action creator` `actions` via the `dispatch` method.

---

## Rules of Reducers

* `reducers` __must__ return any value apart from __undefined__.

* `reducers` are __pure__ - `new state` is only produced using the `previous state` and an `action`.

* `reducers` must not 'reach outside' to decided what value to return.

* `reducers` must not mutate it's input state argument.

---

 ## Examples

 ### `. Dummy Reducer

 ```javascript
import { combineReducers } from "redux";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    dummy: () => { return false; }
})
 ```