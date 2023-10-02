import "./NavBar.css";
import Results from "./Results";
import { useState, useEffect } from "react";

function NavBar() {
  const key = "b1d951fa";
  const controller = new AbortController();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      async function fetchMovies() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setMovies(data.Search);
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <div>
      <div className="navbar">
        <span className="logo">🎬RMDb</span>
        <span>
          <input
            className="searchBar"
            type="text"
            placeholder=" &#x1F50E;&#xFE0E; Search Movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          {query && <Results movies={movies} />}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
