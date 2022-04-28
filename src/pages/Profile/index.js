import React from "react";
import css from "./style.css";
import img from "../../assets/rickFace.jpeg";

export default function Profile() {
  return (
    <div>
      <div className="profile">
        <img className="imgProfile" src={img}></img>

        <div className="description">
          <p className="text">
            Hi, my name is <strong>{"nome"}</strong> and I'm{" "}
            <strong>{"status"}</strong>, so leave me alone motherfucker!
          </p>

          <ul className="list">
            <li> {"Specie"}</li>
            <li> {"Gender"}</li>
            <li>From {"location"}</li>
            <li>Specie: {}</li>
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
