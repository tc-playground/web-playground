import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// { email, password } = formProps
// Callback is a function that will re-direct to the feature page.
export const signup = (formProps, callback) => async dispatch =>  {

    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        // re-direct to feature-route.
        localStorage.setItem('token', response.data.token);
        callback();

    } catch (e) {
        console.log("action index - signup: ", signup);
        dispatch({ type: AUTH_ERROR, payload: "Email already in use."})
    }

}

export const signout = () =>  {
    // Remove the token from local storage and the state.
    localStorage.removeItem('token');
    return { type: AUTH_USER, payload: ""}

}