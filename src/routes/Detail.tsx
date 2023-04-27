import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { DetailedMovieData } from "types/response";
import DetailCard from "src/components/card/detailCard";

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
    setDatas([...datas, json.data.movie]);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
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
          {
            <img
              className={styles.movie__originalImg}
              src={datas[0].background_image_original}
              alt="배경 이미지"
            />
          }
          <div className={styles.movie__home}>
            <Link to={`/react-movie-service/`}>
              <span>HOME</span>
            </Link>
          </div>
          {datas.map((data) => (
            <DetailCard
              key={data.id}
              runtime={data.runtime}
              coverImg={data.medium_cover_image || ""}
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
