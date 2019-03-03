import React from "react";
import { mount } from "enzyme";
import CommentBox  from "components/CommentBox";

let wrapped;

beforeEach( () => {
    wrapped = mount(<CommentBox/>);
});

afterEach( () => {
    wrapped.unmount();
});

it ("has a textarea and a button", () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe ("the text area", () => {

    const fakeInput = "fake test user input";
    const fakeEvent = { target: { value: fakeInput } };

    beforeEach( () => {
        // Simulate an event
        wrapped.find('textarea').simulate('change', fakeEvent);
        // Simulate the component being updated,
        wrapped.update();
    });

    it ("has a textarea users can type into", () => {
        // Check the prop value for the component is the same as the event.
        expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);
    });

    it ("has a textarea that gets cleared when a user clicks on submit", () => {
        // Check the test is set-up correctly.
        expect(wrapped.find('textarea').prop('value')).toEqual(fakeInput);
        // Check text area is cleared after 'submit'.
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");
    });
});

