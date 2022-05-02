import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/Rick_SVG.svg";
import api from "../../services/api";

import css from "./style.css";

import { selectCharacterRequest } from "../../store/modules/nameApi/actions";

export default function Home() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [characters2, setCharacters2] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    if (textSearch != "") {
      setCharacters(
        characters.filter((character) => character.name.includes(textSearch))
      );
    } else {
      setCharacters([...characters2]);
    }
  }, [textSearch]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("character/?status=alive");
      setCharacters(response.data.results);
      setCharacters2(response.data.results);
    }
    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(selectCharacterRequest(id));
  }

  return (
    <div className="home">
      <nav className="">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="button" onClick={() => {}}>
              Search
            </button>
          </form>
          <p>Search for a character. Like Rick...</p>
        </div>
      </nav>

      {characters.map((character) => (
        <div key={character.id} className="cardBox">
          <div className="card">
            <img
              src={character.image}
              className="cardImg card-img-top"
              alt="..."
            />

            <div className="card-body cardText">
              <Link to="/profile">
                <button type="button" onClick={() => handleAdd(character.id)}>
                  {character.name}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
