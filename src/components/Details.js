import { useEffect, useState } from "react";
import "./Details.css";

function Details({ selectedId }) {
  const [selectedMovie, setSelectedMovie] = useState("");
  const key = "b1d951fa";

  useEffect(
    function () {
      async function fetchSelectedMovie() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}&plot=full`
        );
        const data = await res.json();
        setSelectedMovie(data);
      }
      fetchSelectedMovie();
    },
    [selectedId]
  );

  return (
    <div className="movie-card">
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <h2>{selectedMovie.Title}</h2>
      <h3>
        {selectedMovie.Year} {selectedMovie.Runtime}
      </h3>
      <h4>{selectedMovie.Genre}</h4>
      <p>{selectedMovie.Plot}</p>
      <p>Director: {selectedMovie.Director}</p>
      <p>Writer: {selectedMovie.Writer}</p>
      <p>Stars: {selectedMovie.Actors}</p>
    </div>
  );
}

export default Details;
