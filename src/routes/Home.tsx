import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { MovieData } from "types/response";
import MainCard from "src/components/card/mainCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MovieData[]>([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `${process.env.REACT_APP_API}list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>loading... </span>

          <FontAwesomeIcon icon={faSpinner} className={styles.icon} />
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MainCard
              id={movie.id}
              key={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              synopsis={movie.synopsis}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
