import "./Home.scss";
import React, { useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import gallery from "../../data/gallery.json";
import GalleryImage from "../GalleryImage/GalleryImage";

function Home() {
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(gallery);
  }, []);

  const handleImageClick = (imageId) => () => {
    setSelectedImage((currentSelected) =>
      currentSelected.includes(imageId)
        ? currentSelected.filter((id) => id !== imageId)
        : [...currentSelected, imageId]
    );
  };

  const isSelectedCategory = (imageId) => selectedImage.includes(imageId);

  return (
    <>
      <div className="Home">
        <h1 className="Home__title"> I.C.E INGENIEROS VIVILES ESTRUCTURALES</h1>
        <div className="Home__gallery-div">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {gallery.map((category) => (
              <GalleryImage
                title={category.name}
                key={category.id}
                onClick={handleImageClick(image.id)}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <div
        className={`arrow ${isFirstItemVisible ? "disabled" : ""}`}
        onClick={() => scrollPrev()}
      >
        Left
      </div>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <div
        className={`arrow ${isLastItemVisible ? "disabled" : ""}`}
        onClick={() => scrollNext()}
      >
        Right
      </div>
    );
  }
}

export default Home;
