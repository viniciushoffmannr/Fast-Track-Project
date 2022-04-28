import React from "react";
import { Link } from "react-router-dom";
import rickFace from "../../assets/rickface.png";
import "./style.css";

export default function Header() {
  return (
    <div>
      <header className="container">
        <Link to="/">
          <img className="logo" src={rickFace} alt="Rosto do Rick" />
        </Link>
      </header>
    </div>
  );
}
