# Redux 'Root' elements

## Introduction

* It can be difficult to test `redux` based components because the `Provider` and `Store` are not defined in the elements ancestor tree when testing a components in isolation.

* This can be resolved by creating a `Root` component, This can then be used to wrap the `root application element` in the application, and individual redux elements during testing.

* __Example__:

    * `Root.js`

        ```javascript
        import React from "react";

        import { Provider } from "react-redux";
        import { createStore } from "redux";

        import reducers from "reducers";

        const store = createStore(reducers, {});

        export default props => {
            return <Provider store={store}>{props.children}</Provider>;
        };
        ```

    * `index.js`:

        ```javascript
        import React from "react";
        import ReactDOM from "react-dom";

        import App from "components/App";
        import Root from "Root";

        ReactDOM.render(
            <Root>
                <App/>
            </Root>,
            document.querySelector("#root")
        );  
        ```
    
    * `Apps.test.js`

        ```javascript
        import React from "react";
        import ReactDOM from "react-dom";

        import Root from "Root";
        import App from "../App";

        it("shows a comment box", () => {
            // Create a host div for the test on the JSDOM.
            const div = document.createElement('div');
            ReactDOM.render(<Root><App/></Root>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
        ```