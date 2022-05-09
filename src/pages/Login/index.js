import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeUser, logout, selectUser } from "../../storee/profileSlice";
import { useNavigate } from "react-router-dom";

import "./style.css";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(selectUser);
  console.log(name);

  const [names, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    dispatch(changeUser(names));
    if (names !== "") {
      navigate("/home");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (name === "") {
    return (
      <div className="login">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Insira seu nome de usuário."
          aria-label="Username"
          name="name"
          onChange={onChange}
        />

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="login">
        <p>Logado como: {name}</p>

        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Insira seu nome de usuário."
          aria-label="Username"
          name="name"
          onChange={onChange}
        />

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default LoginPage;
