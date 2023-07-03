import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { toast } from 'react-toastify';

const CreatePost = () => {
  const dispatch = useDispatch();

  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    try {
      let body = { title, author };
      dispatch(createPost(body));
      toast.success(`${title},created Successfully`)
      setTitle("");
      setAuthor("");
    } catch (error) {
      toast.error("Ooh.. An Error Encountered");
    }
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

export default CreatePost;
