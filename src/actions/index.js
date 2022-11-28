import jsonPlaceHolder from "../apis/jsonPlaceHolder";

// export const fetchposts = () => {
//   //Bad approach!!!
//   const response = jsonPlaceHolder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

export const fetchposts = () => async (dispatch) => {
  const { data } = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: data,
  });
};
