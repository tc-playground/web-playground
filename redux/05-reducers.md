# Reducers

## Introduction

- `reducers` are **contained** by the `redux store`.

- `reducers` are fed ``action creator``actions`via the`dispatch` method and generate a new state from the current state.

- `reducer` prototype:
  ```
  export default (state = null, action) {
      newState = clone(state);
      doStuff(newState);
      return newState;
  }
  ```

---

## Rules of Reducers

1. `reducers` **must return a value**, but, must not return **undefined**.

2. `new state` is only produced using the `previous state` and an `action`.

   - The first time a reducer is called it is `undefined` **unless the state is initialised**.

3. `reducers` must not 'reach outside' to decided what value to return. `reducers` are **pure**. For example a reducer may not:

   - Make an API request.
   - Access the DOM.
   - etc.

4. `reducers` must not mutate it's input state argument. Instead create a new **copy** of the state and mutate that.
   - Do not mutate `arrays` or `objects`.
     > NB: In JavaScript `strings` and `numbers` are immutables values.
     > NB: ``React`will only`render` state that has changed.

---

## Examples

### `. Dummy Reducer

```javascript
import { combineReducers } from "redux";

export default combineReducers({
  // Dummy reducer to remove initial errors.
  dummy: () => {
    return false;
  }
});
```
