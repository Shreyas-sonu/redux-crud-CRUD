import axios from "axios";
import AxiosInstance from "../apis/AxiosInstance";

//! Create A Post
//! Post is parameter used as payload

export let createPost = (post) => {
    // It is  a Middleware because it returning a function instead of object
    return async (dispatch) => {
        let createData = await AxiosInstance.post('/posts',post)
        dispatch({
            type: "CREATE_POST",
            payload:createData.data,
        })
    }
}

export let fetchPost = () => {
  // It is  a Middleware because it returning a function instead of object
  return async dispatch => {
    let fetchData = await AxiosInstance.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: fetchData.data,
    });
  };
};

export let editPost = (change,id) => {
  // It is  a Middleware because it returning a function instead of object
  return async dispatch => {
    let editData = await AxiosInstance.put(`/posts/${id}`,change);
    dispatch({
      type: "EDIT_POST",
      payLoad: editData.data,
    });
  };
};

export let deletePost = (ide) => {
  // It is  a Middleware because it returning a function instead of object
  return async dispatch => {
    let deleteData = await AxiosInstance.delete(`/posts/${ide}`);
    dispatch({
      type: "DELETE_POST",
    });
  };
};