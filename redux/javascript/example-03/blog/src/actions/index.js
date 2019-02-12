import jsonPlaceholder from "../apis/jsonPlaceholder";

// Asynchronous Action Creator.

// Short Syntax Version - Define a function that is going to return a function.
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Long Syntax Version
//
// export const fetchPosts = () => {
//     // async can now be used as we re now returning a function
//     // and redux-thunk can call it to obtain the action object.
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get("/posts");
//         dispatch({
//           type: "FETCH_POSTS",
//           payload: response
//         });
//     }
// };
