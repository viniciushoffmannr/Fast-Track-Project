import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ShowUser from "../../components/showUser";

import api from "../../services/api";
import "./style.css";
import { fetchCharcRequest } from "../../storee/characterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [searchCharacters, setSearchCharacters] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    if (textSearch !== "") {
      setCharacters(
        characters.filter((character) => character.name.includes(textSearch))
      );
    } else {
      setCharacters([...searchCharacters]);
    }
  }, [textSearch]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("character/?status=alive");
      setCharacters(response.data.results);
      setSearchCharacters(response.data.results);
    }
    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(fetchCharcRequest(id));
  }

  return (
    <div>
      <ShowUser />
      <nav>
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
              placeholder="Search for a character. Like Rick Sanchez..."
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      <section className="container-fluid ">
        <div className="row justify-content-center">
          {characters.map((character) => (
            <article
              key={character.id}
              className=" card-largura p-1 col-12 col-md05 "
            >
              <img
                src={character.image}
                className="card-img-top card-posicao-imagem"
                alt="profile"
              />
              <div className="card-body ">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species}</p>
                <Link to="/profile">
                  <button
                    className="btn homeButton"
                    type="button"
                    onClick={() => handleAdd(character.id)}
                  >
                    <strong>View Profile</strong>
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
