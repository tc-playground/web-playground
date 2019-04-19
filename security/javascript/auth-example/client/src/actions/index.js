import axios from 'axios';
// import AUTH_USER from './types';

// { email, password } = formProps
export const signup = formProps => dispatch =>  {
    axios.post('http://localhost:3090/signup', formProps)    
}