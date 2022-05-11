import React from "react";
import { useSelector } from "react-redux";

import "./style.css";
import CommentsProvider from "../../contexts/CommentsContext";
import CommentsList from "../../components/commentsLi/liComment";
import AddComment from "../../components/commentsLi/addComment";
import { selectCharc } from "../../storee/characterSlice";
import ShowUser from "../../components/showUser";

export default function Profile() {
  const { charc } = useSelector(selectCharc);

  if (charc !== "") {
    console.log(charc);
    return (
      <div>
        <ShowUser />
        <div className="profile">
          <img className="imgProfile" alt="Profile" src={charc.image} />

          <div className="description">
            <p className="text">
              Hi, my name is <strong>{charc.name}</strong> and I'm
              <strong> {charc.status}</strong>, so leave me alone!
            </p>

            <ul className="list">
              <li> {charc.specie}</li>
              <li> {charc.gender}</li>
              <li>From {charc.location.name}</li>
              <li>Specie: {charc.species}</li>
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
