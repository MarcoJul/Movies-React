import { useEffect } from "react";

import classes from "./Filter.module.css";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, movies }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className={classes.filters}>
      <button
        className={activeGenre === 0 ? classes.active : ""}
        onClick={() => {
          setActiveGenre(0);
        }}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? classes.active : ""}
        onClick={() => {
          setActiveGenre(35);
        }}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? classes.active : ""}
        onClick={() => {
          setActiveGenre(28);
        }}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
