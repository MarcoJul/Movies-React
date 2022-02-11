import { useState, useEffect } from "react";

import Movie from "./components/Movie";

import classes from "./App.module.css";
import config from "./keys/apiKeys";

function App() {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  const fetchFilms = async () => {
    const response = await fetch(config.moviesUrl);
    const data = await response.json();
    setFilms(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <div className={classes.app}>
      <ul className={classes.grid}>
        {films.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            picture={movie.backdrop_path}
            title={movie.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
