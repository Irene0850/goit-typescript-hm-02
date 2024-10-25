import { FC, useEffect, useState } from "react";
import fetchImages, { Image } from "../../Image-api";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(searchQuery, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [searchQuery, page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function handleSearchSubmit(newQuery: string) {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  function modalOpen(image: Image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} setSelectedImage={modalOpen} />
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          image={selectedImage}
          onRequestClose={closeModal}
        />
      )}
      <Toaster />
    </div>
  );
};

export default App;
