import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext, useState } from "react";

const AddComment = () => {
  const { saveComments } = useContext(CommentsContext);
  const [name, setName] = useState();
  const [comment, setComment] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveComments({ name, comment });
  };

  return (
    <form id="formComments" onSubmit={handleFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Username"
          aria-label="Username"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <textarea
          className="form-control"
          type="text"
          name="title"
          value={comment}
          id="title"
          placeholder="Your Comment"
          onChange={(e) => setComment(e.target.value)}
          aria-label="With textarea"
        ></textarea>
      </div>

      <br />
      <button type="submit" className="btn btn-outline-dark">
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
