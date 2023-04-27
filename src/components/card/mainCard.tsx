import styles from "./index.module.css";
import Image from "../image";
import { Link } from "react-router-dom";
import Box from "../box";

interface mainCardProps {
  id: number;
  year: number;
  coverImg: string;
  title: string;
  genres: string;
  synopsis: string;
}

const MainCard = ({
  id,
  year,
  coverImg,
  title,
  genres,
  synopsis,
}: mainCardProps) => {
  return (
    <Box styleType="main">
      <div className={styles.mainCard}>
        <div className={styles.mainCard__img}>
          <Link to={`/movie/${id}`}>
            <Image src={coverImg} alt={title} styleType="main" />
          </Link>
        </div>
        <div>
          <h2 className={styles.mainCard__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
            <span className={styles.mainCard__year}>{year}</span>
          </h2>
          <ul className={styles.mainCard__genres}>
            <p>{genres + " "}</p>
          </ul>
          <p className={styles.mainCard__synopsis}>
            {synopsis.length > 235 ? `${synopsis.slice(0, 235)}...` : synopsis}{" "}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default MainCard;
