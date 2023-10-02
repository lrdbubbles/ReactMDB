import "./Movie.css";

function Movie({ movie }) {
  return (
    <li className="movie">
      <img src={movie.Poster} alt={`${movie.Title}'s poster`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </li>
  );
}

export default Movie;
