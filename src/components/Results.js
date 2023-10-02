import "./Results.css";
import Movie from "./Movie";

function Results({ movies, onSelectMovie }) {
  return (
    <div className="results">
      <ul>
        {movies?.map((movie) => (
          <Movie
            movie={movie}
            onSelectMovie={onSelectMovie}
            key={movie.imdbID}
          />
        ))}
      </ul>
    </div>
  );
}

export default Results;
