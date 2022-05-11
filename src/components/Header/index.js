import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import rickFace from "../../assets/Rick_SVG.svg";
import "./style.css";
import { fetchCharcRequest, resetCharc } from "../../storee/characterSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClick() {
    dispatch(resetCharc());
    navigate("/home");
  }
  return (
    <div onClick={onClick}>
      <header className="container">
        <img className="logo" src={rickFace} alt="Rosto do Rick" />
        <h1 className="principalName">TiwtRick</h1>
      </header>
    </div>
  );
}
