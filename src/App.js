import "./App.css";
import Results from "./components/Results";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import { useEffect, useState } from "react";

function App() {
  const [showResults, setShowResults] = useState("false");
  const [selectedId, setSelectedID] = useState("");
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  function handleSelectMovie(id) {
    setSelectedID(id);
    setQuery("");
  }

  return (
    <>
      <NavBar
        showResults={showResults}
        setShowResults={setShowResults}
        onSelectMovie={handleSelectMovie}
        selectedId={selectedId}
        movies={movies}
        setMovies={setMovies}
        query={query}
        setQuery={setQuery}
      />
      {selectedId && <Details selectedId={selectedId} />}
    </>
  );
}

export default App;
