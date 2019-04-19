import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// { email, password } = formProps
export const signup = formProps => async dispatch =>  {

    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        dispatch({ type: AUTH_USER, token: response.data.token });
    } catch (e) {
        console.log("action index - signup: ", signup);
        dispatch({ type: AUTH_ERROR, payload: "Email already in use."})
    }

}