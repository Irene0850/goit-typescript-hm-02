import { FC } from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: () => void;
  author: string;
  likes: number;
  description: string;
}

const ImageCard: FC<ImageCardProps> = ({
  src,
  alt,
  onClick,
  author,
  likes,
  description,
}) => {
  return (
    <div onClick={onClick}>
      <img className={css.images} src={src} alt={alt} />
      <div className={css.info}>
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
