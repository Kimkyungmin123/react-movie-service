import styles from "./index.module.css";
import Image from "../image";
import Box from "../box";

interface detailCardProps {
  runtime: number;
  coverImg: string;
  likeCount: number;
  descriptionIntro: string;
  title: string;
  url: string;
}

const DetailCard = ({
  runtime,
  coverImg,
  likeCount,
  descriptionIntro,
  title,
  url,
}: detailCardProps) => {
  return (
    <Box styleType="detail">
      <div className={styles.detailCard}>
        <div>
          <Image styleType="detail" src={coverImg} alt={title} />
          <a href={url} target="_blank" rel="noreferrer">
            <span className={styles.detailCard__title}>{title}</span>
          </a>
          <div className={styles.detailCard__etc}>
            <span className={styles.detailCard__runTime}>
              ⏱ {String(Math.floor(runtime / 60)).padStart(2, "0")}h{" "}
              {String(runtime % 60).padStart(2, "0")}m{" "}
            </span>
            <span className={styles.detailCard__like}>👍 {likeCount}</span>
          </div>
        </div>
        <div className={styles.detailCard__description}>
          <span>Description</span>
          <p className={styles.detailCard__descriptionIntro}>
            {descriptionIntro}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default DetailCard;
