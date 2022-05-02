import React from "react";
import { createContext, useState } from "react";

export const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Rick",
      comment: "Wubba Lubba Dub Dub",
    },
    {
      id: 2,
      name: "Morty",
      comment: "did you see Jessica?",
    },
    {
      id: 3,
      name: "Summer",
      comment: "you are so Beautiful!",
    },
    {
      id: 4,
      name: "Jerry",
      comment: "where's Morty",
    },
  ]);

  const saveComments = (comment) => {
    const newComment = {
      id: list.length + 1,
      name: comment.name,
      comment: comment.comment,
    };
    setList([...list, newComment]);
  };

  return (
    <CommentsContext.Provider value={{ list, saveComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
