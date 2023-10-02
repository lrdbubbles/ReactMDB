import "./Movie.css";

function Movie({ movie, onSelectMovie }) {
  return (
    <li className="movie" onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title}'s poster`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </li>
  );
}

export default Movie;
