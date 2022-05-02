import React, { useContext } from "react";
import { LiCommentsItem } from ".";
import { CommentsContext } from "../../contexts/CommentsContext";

const CommentsList = () => {
  const context = useContext(CommentsContext);

  const data = context.list.map((li) => <LiCommentsItem key={li.id} li={li} />);

  return <div>{data} </div>;
};

export default CommentsList;
