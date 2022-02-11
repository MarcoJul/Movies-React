import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.card}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.imgContainer}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.picture}
          className={classes.image}
        />
      </div>
    </li>
  );
};

export default Movie;
