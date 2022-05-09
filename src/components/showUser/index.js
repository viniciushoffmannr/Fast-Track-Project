import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../storee/profileSlice";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ShowUser = () => {
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <div id="UserContainer">
      <p>
        Logado como : <strong>{name}</strong>
      </p>
      <button
        className=" btn-outline-dark btni"
        type="button"
        onClick={onClick}
      >
        Change
      </button>
    </div>
  );
};

export default ShowUser;
