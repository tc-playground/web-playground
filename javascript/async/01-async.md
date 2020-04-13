# Async

## Introduction

* `Asynchronous actions` do not block and allow the running thread to continue processing.

    1. `asynchronous actions` are used for actions that take a significant amount of time such as `I/O` actions.

    2. `asynchronous actions` are normal in JavaScript/TypeScript.

    3. `asynchronous actions` are registered to a `callback` function to handle the result of the actions.

    4. `asynchronous actions` can be handled with various abstractions, such as, `Promises`.

* `Synchronous actions` _block_ and prevent the running thread continuing processing.

    1. `synchronous actions` are used for actions that are immediate and do not need to wait such as `calculation`.

    2. `asynchronous actions` are unusual in JavaScript/TypeScript, as action are often triggered by `events`.

---

## File Read Example

1. __Non-Blocking Read (Asynchronous)__

    ```javascript
    var fs = require('fs');
 
    // Asynchronous non-blocking read.
    fs.readFile('DATA', 'utf8', function(err, contents) {
        // A callback handler asynchronously processes the data after it ahs returned.
        console.log(contents);
    });
    // Processing continues without blocking...
    console.log('after calling readFile');
    ```

2. __Synchronous Read (Asynchronous)__


    ```javascript
    var fs = require('fs');
    
    // Synchronous non-blocking read.
    var contents = fs.readFileSync('DATA', 'utf8');
    console.log(contents);
    ```


---

## References

* [Reading a file with Node.js - blocking and non-blocking](https://code-maven.com/reading-a-file-with-nodejs)