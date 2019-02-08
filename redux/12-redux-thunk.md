# Redux Thunk

## Introduction

* `redux thunk` relaxes the rules on `Action creators` to allow them to return an `action object` **OR** a`function` that returns an `action object`.

* If a `function` is returned by an `Action creator`; `redux-thunk` will automatically invoke it with the `dispatch` and `getState` functions.

* `redux-thunk` allows you to manually `dispatch()` an (new) `action`.

* `redux-thunk` middleware can help make `async requests` in a redux application. Once the result is returned, it can `dispatch` the result as an `action object`.

* `redux-thunk` is an npm library:

  - **Install** - `npm install --save redux thunk

---

* `dispatch()`

* `getState()`

* [GitHub Redux-Thunk](https://github.com/reduxjs/redux-thunk)
