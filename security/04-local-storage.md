# Browser `Local Storage`

## Introduction

* `localStorage` is a a capability in all modern browsers that allows small amounts of `state` to be stored.

* `localStorage` persist over `page refreshes`.

---

## Examples

* `setItem` - Store some data in local storage.

    ```
    localStorage.setItem("some-key", "some-value");
    undefined
    ```

* `getItem` - Retrieve some data from local storage.

    ```
    localStorage.getItem("some-key");
    "some-value"
    ```

* `removeItem` - Delete some data from local storage.

    ```
    localStorage.removeItem('some-key');
    undefined
    ```

