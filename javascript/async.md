# JavaScript Async

* __Promise__

    1. A `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
    
    2. A `Promise` lets _asynchronous methods_ return values like _synchronous methods_.

        1. The asynchronous method returns a promise to supply the value at some point in the future.

    3. A `Promise` is in one of these `states`:

        1. `pending` - initial state, neither fulfilled nor rejected.

        2. `fulfilled` - meaning that the operation completed successfully.

        3. `rejected` - meaning that the operation failed.
    
    4. A `Promise` allows you to associate `handlers` with an `asynchronous` action's eventual `success` value or `failure` reason. 

        1. `Promise.prototype.then( result )` - A function handler for a successful action.

        2. `Promise.prototype.catch( error )` - A function handler for a failed action.
    
    5. The `Promise.resolve()` method returns a Promise object that is resolved with a given value. 

        1. If the value is a `Promise`, that promise is returned.
        
        2. If the value is a `Themable` (i.e. has a "then" method), the returned `Promise` will "follow" that `Thenable`, adopting its eventual state; 
        
            > This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.
    
    6. See also `async` and `await` ES16 keywords.


* __Thenable__ 

    1. The `Thenable.then()` function flattens nested layers of promise-like objects.
    
        > e.g. A promise that resolves to a promise that resolves to something is flattened into a single layer.


---

## References

* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* [Promise.resolve()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)