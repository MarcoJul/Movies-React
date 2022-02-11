import { useState, useEffect } from "react";

import Movie from "./components/Movie";

import classes from "./App.module.css";
import config from "./keys/apiKeys";
import Filter from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredmovies, setFilteredmovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(28);

  const fetchmovies = async () => {
    const response = await fetch(config.moviesUrl);
    const data = await response.json();
    setMovies(data.results);
    setFilteredmovies(data.results);
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  return (
    <div className={classes.app}>
      <Filter
        movies={movies}
        setFiltered={setFilteredmovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className={classes.grid}>
        <AnimatePresence>
          {filteredmovies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              picture={movie.backdrop_path}
              title={movie.title}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
