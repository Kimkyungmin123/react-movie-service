import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Element from "../components/Element";
import styles from "./Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { DetailedMovieData } from "types/response";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState<DetailedMovieData[]>([]);

  const getMovie = async () => {
    const json = await (
      await fetch(
        `${process.env.REACT_APP_API}movie_details.json?movie_id=${id}`
      )
    ).json();
    setDatas(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    console.log(id);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>{" "}
          <FontAwesomeIcon icon={faSpinner} className={styles.icon} />
        </div>
      ) : (
        <div className={styles.movies}>
          {datas.map((data) => (
            <Element
              key={data.id}
              runtime={data.runtime}
              coverImg={data.medium_cover_image}
              originalImg={data.background_image_original}
              likeCount={data.like_count}
              descriptionIntro={data.description_intro}
              title={data.title}
              url={data.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Detail;
