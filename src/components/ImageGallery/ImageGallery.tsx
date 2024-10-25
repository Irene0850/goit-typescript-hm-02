import { FC } from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  images: Image[];
  setSelectedImage: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, setSelectedImage }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css.galleryitem}
          onClick={() => setSelectedImage(image)}
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => setSelectedImage(image)}
            author={image.user.name}
            likes={image.likes}
            description={image.description || ""}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
