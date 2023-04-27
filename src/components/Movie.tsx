import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

interface MovieProps {
  id: number;
  year: number;
  coverImg: string;
  title: string;
  genres: string;
  synopsis: string;
}

function Movie({ id, year, coverImg, title, genres, synopsis }: MovieProps) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
      </Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__synopsis}>
          {synopsis.length > 235 ? `${synopsis.slice(0, 235)}...` : synopsis}{" "}
        </p>

        <ul className={styles.movie__genres}>
          <p>{genres + " "}</p>
        </ul>
      </div>
    </div>
  );
}

export default Movie;
