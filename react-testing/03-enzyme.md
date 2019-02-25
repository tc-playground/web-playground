# Enzyme

## Introduction

* `enzyme` testing allows us to write more modular tests.

* `enzyme` testing allows us to write tests for a single component (excluding child components).

* `enzyme` testing allows us write tests that do not need to inspect the inner working of a component's `child components`.

* `enzyme` testing skips the `vanilla React` process of rendering the component under test.

* `enzyme` testing renders the component under test in one of three ways:

    1. `Static` - Render the given component as a plain static `HTML` string.

    2. `Shallow` - Render __just__ the given __component only__ (i.e. __None__ of it children) as a `JSDOM` element.

    3. `Full` - Render the given __component and all it's descendents__ as a `JSDOM` element.

---

## Installation

1. Add the `enzyme` and `enzyme-adapter` libs:

   ```bash
   npm install --save enzyme enzyme-adapter-react-16
   ```

   > NB: The adaptor needs to be the version appropriate for the current version of `React` being used: e.g. `enzyme-adapter-react-${react-major-version-number}`

2. Add `${project_root}/src/setupTests.js`:

   ```javascript
   import Enzyme from "enzyme";
   import Adapter from "enzyme-adapter-react-16";

   Enzyme.configure({ adapter: new Adapter() });
   ```

---

## Enzyme
