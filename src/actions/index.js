import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// export const fetchposts = () => {
//   //Bad approach!!!
//   const response = jsonPlaceHolder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

// export const fechPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchposts());
//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   // console.log(getState().posts);
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };

export const fetchposts = () => async (dispatch) => {
  const { data } = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: data,
  });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// export const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
