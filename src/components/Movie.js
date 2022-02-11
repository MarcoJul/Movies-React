import classes from "./Movie.module.css";

import { motion } from "framer-motion";

const Movie = (props) => {
  return (
    <motion.div layout className={classes.card}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.imgContainer}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.picture}
          className={classes.image}
        />
      </div>
    </motion.div>
  );
};

export default Movie;
