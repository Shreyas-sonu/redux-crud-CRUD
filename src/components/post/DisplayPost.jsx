import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, fetchPost } from "../../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DisplayPost = () => {
  let dispatch = useDispatch();
  let fetchValue = useSelector(state => state.postReducers.fetchItems);

  let edt = () => {};
  useEffect(() => {
    dispatch(fetchPost());
  }, [fetchPost]);
  let del = async id => {
    try {
      dispatch(deletePost(id));
      window.location.assign("/");
      toast.success(`1 Post has been Removed Successfully`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {fetchValue.map(val => {
        return (
          <Fragment key={val.id}>
            <article>
              <h2>{val.title}</h2>
              <p>{val.author}</p>
              <span>
                <Link to={`/edit-post/${val.id}`}>
                  <button className="edit">
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                </Link>

                <button
                  className="delete"
                  onClick={() => {
                    del(val.id);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </span>
            </article>
          </Fragment>
        );
      })}
    </>
  );
};

export default DisplayPost;
