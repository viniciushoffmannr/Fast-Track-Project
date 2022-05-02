import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext, useState } from "react";

const AddComment = () => {
  const { saveComments } = useContext(CommentsContext);
  const [name, setName] = useState();
  const [title, setTitle] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveComments({ name, comment: title });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        id="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="title"
        value={title}
        id="title"
        placeholder="New Comment..."
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit"> Add Comment</button>
    </form>
  );
};

export default AddComment;
