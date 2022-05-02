import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import css from "./style.css";

import CommentsProvider from "../../contexts/CommentsContext";
import CommentsList from "../../components/commentsLi/liComment";
import AddComment from "../../components/commentsLi/addComment";

export default function Profile() {
  const character = useSelector((state) => state.name);

  if (character.length > 0) {
    return (
      <div>
        <div className="profile">
          <img className="imgProfile" src={character[0].image} />

          <div className="description">
            <p className="text">
              Hi, my name is <strong>{character[0].name}</strong> and I'm
              <strong> {character[0].status}</strong>, so leave me alone
              motherfucker!
            </p>

            <ul className="list">
              <li> {character[0].specie}</li>
              <li> {character[0].gender}</li>
              <li>From {character[0].location.name}</li>
              <li>Specie: {character[0].species}</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 id="title">
            <strong>Comments about...</strong>
          </h2>
          <CommentsProvider>
            <CommentsList />
            <br />
            <hr />
            <br />
            <AddComment />
          </CommentsProvider>
        </div>
      </div>
    );
  }
}
