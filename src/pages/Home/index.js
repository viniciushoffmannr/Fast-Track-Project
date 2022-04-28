import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Rick_SVG.svg";
import css from "./style.css";

export default function Home() {
  return (
    <div className="home">
      <nav class="">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-light" type="submit">
              Search
            </button>
          </form>
          <p>Search for a character. Like Rick...</p>
        </div>
      </nav>

      <div className="cardBox">
        <div class="card">
          <img src={img} class="cardImg card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={img} class="cardImg card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={img} class="cardImg card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
