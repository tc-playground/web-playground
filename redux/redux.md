# Redux

## Introduction

`Redux` is a predictable state container for JavaScript apps.

---

## Overview

### [Redux Store](https://redux.js.org/basics/store)

* In `Redux`, there is a single `store` that holds the whole application state.

* In `React-Redux`, the `props` for a component are defined in `mapStateToProps`.


### Redux Cycle

```
[Action Creator] -> [Action] -> [Dispatch] -> [Reducers] -> [State (store)] ... action creators
```

* __`Action Creator`__ - The entity (function) that creates the `action`, for example, a web page component.



* __`Action`__ - A type of event that consists of a `type` and `payload`.
    
    * __`Type`__ - This is used in a `reducer` to process the `payload`. It is the operation to be performed.

    * __`Payload`__ - The data to be used in the operation.


* __`Dispatch`__ - A special `dispatch` function that wraps a set of `reducers` and sends an incoming `action` to all of them.

* __`Reducer`__ - A big switch statement. A reducer takes an `action payload` and performs operation based on the `action type`.

* __`State`__ - The state (the `store`) is updated with the result of the `reducer`.

    * >NB: It using `react` this will render any components that have changed.



---

## Simple Tutorials

* [Redux Beginner Guide](https://www.valentinog.com/blog/redux/)
* [Redux Tutorial](https://www.robinwieruch.de/react-redux-tutorial/)
* [Redux- How it Works](https://www.youtube.com/watch?v=3sjMRS1gJys) - YouTube - Insurance Company Example.
* [Redux - Simple App](https://www.youtube.com/watch?v=kJeXr1K3nyg) - YouTube

---

## Advanced Tutorials

* [Redux Thunk](https://www.youtube.com/watch?v=1QI-UE3-0PU) - Asynchronous Redux.


---

## References

* [Redux Home](https://redux.js.org/)
* [Redux Starter Kit](https://redux-starter-kit.js.org/)
* [React Redux](https://react-redux.js.org/)
