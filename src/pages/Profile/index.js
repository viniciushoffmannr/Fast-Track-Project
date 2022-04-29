import React, { useState } from "react";
import { useSelector } from "react-redux";
import css from "./style.css";

import img from "../../assets/rickFace.jpeg";

export default function Profile() {
  const character = useSelector((state) => state.name);

  return (
    <div>
      <div className="profile">
        <img className="imgProfile" src={character[0].image}></img>

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

      <div className="comentarios">
        <h2 id="title">
          <strong>Comments about...</strong>
        </h2>
        <ul className="listComments">
          <li>
            <strong>Rick:</strong> Wubba Lubba Dub Dub{" "}
          </li>
          <li>
            <strong>Morty:</strong>did you see Jessica?
          </li>
          <li>
            <strong>Summer:</strong> you are so Beautiful!
          </li>
          <li>
            <strong>Jerry Smith:</strong> where's Morty
          </li>
        </ul>
      </div>
    </div>
  );
}
