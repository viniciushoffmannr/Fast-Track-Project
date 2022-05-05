import React from "react";
import { useSelector } from "react-redux";

import "./style.css";
import CommentsProvider from "../../contexts/CommentsContext";
import CommentsList from "../../components/commentsLi/liComment";
import AddComment from "../../components/commentsLi/addComment";

export default function Profile() {
  const characterArray = useSelector((state) => state.name);

  let character = characterArray[0];
  if (characterArray.length > 0) {
    return (
      <div>
        <div className="profile">
          <img className="imgProfile" alt="Profile" src={character.image} />

          <div className="description">
            <p className="text">
              Hi, my name is <strong>{character.name}</strong> and I'm
              <strong> {character.status}</strong>, so leave me alone!
            </p>

            <ul className="list">
              <li> {character.specie}</li>
              <li> {character.gender}</li>
              <li>From {character.location.name}</li>
              <li>Specie: {character.species}</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 id="about">
            <strong>Comments about...</strong>
          </h2>
          <CommentsProvider>
            <CommentsList />

            <p id="addComment">
              <strong>Add a comment too</strong>
            </p>

            <AddComment />
          </CommentsProvider>
        </div>
      </div>
    );
  }
}
