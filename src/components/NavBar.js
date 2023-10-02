import "./NavBar.css";
import Results from "./Results";
import { useState, useEffect } from "react";

function NavBar({
  setShowResults,
  showResults,
  onSelectMovie,
  movies,
  setMovies,
  query,
  setQuery,
}) {
  const controller = new AbortController();

  const key = "b1d951fa";

  useEffect(
    function () {
      async function fetchMovies() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setMovies(data.Search);
        if (query > 3) setShowResults("true");
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
          {showResults && (
            <Results movies={movies} onSelectMovie={onSelectMovie} />
          )}
        </span>
      </div>
    </div>
  );
}

export default NavBar;
