# React

## Introduction

`React` is a JavaScript library for building user interfaces. `React` reacts to __state changes__ in an application.

---

## Overview

* `React` provides composable `components` (a.k.a `elements`).

    * `React components` are pure JavaScript.

    * `React applications` are a __tree of components__,
    
    * `React applications` have a `root component` that represents the entire application.


* `React` has a `virtual DOM` that is defined by the tree of React components.

    * `React components` have a `render()` function that defines the virtual DOM elements.
    
    * `React components` in the virtual DOM are mapped to browser `DOM elements`.

    * `React components` are mapped via the name of the component to provide custom HTML tags/elements.


* `React` continuously `synchronises` the virtual DOM and physical DOM.

    * `React` reacts to __state changes__.

    * Changes just need to be made to the `react components` (virtual DOM elements) via the `render()` method.

    * The is no need to manually update the DOM via the DOM API (or jQuery, etc).


* `react components` have local `state` model.

---

## Examples

### Basic React Component

```
class AComponent extends Component {

    state = {};

    render() {
        return ReactElement.
    }

}
```

### Basic React `index.html`

```html
<html>
    ...
    <div id="root"></div>
    ...
</html>

```

---

## Development Tools

* `create-react-app` - A cli tool for generating a react application scaffold for JavaScript or TypeScript.
    ```
    npm install -g create-react-app
    ```

* Visual Studio Code [`Simple React Snippets`](https://github.com/burkeholland/simple-react-snippets) - Snippets for JavaScript react.

* Visual Studio Code [`Prettier`](https://github.com/prettier/prettier-vscode) - Code formatting for JavaScript, TypeScript, and, CSS.



---

## Tutorials

* [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* [Mosh React JavaScript Tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0)

---

## References

* [React Home](https://reactjs.org/)
