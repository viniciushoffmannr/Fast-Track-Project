import React from "react";
import { Link } from "react-router-dom";
import rickFace from "../../assets/Rick_SVG.svg";
import "./style.css";

export default function Header() {
  return (
    <div>
      <header className="container">
        <Link to="/home">
          <img className="logo" src={rickFace} alt="Rosto do Rick" />
          <h1 className="principalName">TiwtRick</h1>
        </Link>
      </header>
    </div>
  );
}
