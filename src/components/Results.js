import "./Results.css";
import Movie from "./Movie";

function Results({ movies }) {
  return (
    <div className="results">
      <ul>
        {movies?.map((movie) => (
          <Movie movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default Results;
