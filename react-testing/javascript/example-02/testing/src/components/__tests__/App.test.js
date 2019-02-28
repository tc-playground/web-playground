import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it("shows a comment box", () => {
    // Create a shallow JSDOM to prevent tests accessing child component information.
    const wrapped = shallow(<App/>);
    // Just check for the recorded existence of a single child component.
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
    // Create a shallow JSDOM to prevent tests accessing child component information.
    const wrapped = shallow(<App/>);
    // Just check for the recorded existence of a single child component.
    expect(wrapped.find(CommentList).length).toEqual(1);
});
