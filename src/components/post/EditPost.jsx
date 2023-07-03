import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editPost } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

const EditPost = () => {
  const dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let { id } = useParams();

  let fetchValue = useSelector(state => state.postReducers.fetchItems);
  let current = fetchValue.find(cv => cv.id === parseInt(id));
  console.log(current);

  useEffect(() => {
    try {
      let fetchData = async () => {
        setTitle(current.title);
        setAuthor(current.author);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  let handleSubmit = async e => {
    e.preventDefault();
    let body = { title, author };
    dispatch(editPost(body, id));
    window.location.assign("/");
    toast.success(`${id} has been Updated Successfully`);
  };
  return (
    <form onSubmit={handleSubmit} className="form-block">
      <div>
        <input
          type="text"
          placeholder="Enter Post title"
          name="title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Enter Author Name"
          name="author"
          value={author}
          onChange={e => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default EditPost;
