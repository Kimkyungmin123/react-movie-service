import { SyntheticEvent } from "react";
import styles from "./index.module.css";
import cn from "classnames";

type ImageStyleType = "main" | "detail";

interface ImageProps {
  src: string;
  alt: string;
  styleType: ImageStyleType;
}
const Image = ({ src, alt, styleType }: ImageProps) => {
  const getStyleType = () => {
    if (!styleType) return;

    switch (styleType) {
      case "main":
        return styles.main;
      case "detail":
        return styles.detail;
      default:
        return;
    }
  };
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    img.style.backgroundColor = "black";
    styleType === "main"
      ? (img.style.minWidth = "150px")
      : (img.style.minWidth = "230px");
  };

  return (
    <img
      className={cn(styles.card__img, getStyleType())}
      src={src}
      onError={handleImageError}
      alt={alt}
    />
  );
};

export default Image;
