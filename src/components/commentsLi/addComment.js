import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../storee/profileSlice";

const AddComment = () => {
  const { saveComments } = useContext(CommentsContext);
  const [comment, setComment] = useState();
  const { name } = useSelector(selectUser);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveComments({ name, comment });
  };

  return (
    <form id="formComments" onSubmit={handleFormSubmit}>
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
