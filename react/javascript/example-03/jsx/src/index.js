// Import React and ReadDOM libraries.

import React from "react";
import ReactDOM from "react-dom";

// Create React component.
const App = () => {
    return <div>Hi there!</div>;
};

// Show React component on screen.
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);