# Components

## Introduction

* `React components` can be __nested__.

* `React components` are __reusable__.

* `React components` are __configurable__ (when being created).

---

## Components

* `components` can be defined as a `Class Based Component` by extending `React.Component` and implementing `render()`.

* `components` can be defined as a `Function Based Component` that returns `jsx`.

* `components` exist in a `component hierarchy`.

* The `root component` is rendered.

* `components` can be configured via `props` passed into them when they are created/refreshed.

---

## Props

* `props` are a mechanism for passing data from a `parent component` to a `child component`.

* `props` are __passed into__ a `component` via the `jsx` tag:
    ```
    <CommentDetail author={theAuthor} book={theBook}/>
    ```

* `props` are __accepted by__ a `Class Based Component` automatically :
    ```
    MyComponent extends React.Component {
        ...
        render () {
            <a href="/" className="author">{this.,props.author}</a>
        }
    }
    ```

* `props` __must be accepted by__ a `Function Based Component` in it`s definition:
    ```
    const CommentDetail = props => {
        ...
        <a href="/" className="author">{props.author}</a>

    }
    ```

* `props` __read only__.

---

## Notes

### Creating new JSX Elements and nested components.

* __Create__ new `jsx` component

    * Create new `jsx` file.

    * Import `react` and required libraries.

    * Define new `React Component` or `function`.

    * Implement `render` or `return block` with new JSX.

    * Configure `props` system.

    * Export the `React Component` / or `function`.

* __Use__ new `jsx` component

    * Import `react` and required libraries.

    * Import the new `JSX`.


---

## References

* [Components and Props](https://reactjs.org/docs/components-and-props.html)



