import "./Home.scss";
import React, { useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import gallerydata from "../../data/gallery.json";
import GalleryImage from "../GalleryImage/GalleryImage";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import brickHouse from "../../Assets/Images/brick-house.png";

function Home() {
  const [selectedImage, setSelectedImage] = React.useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(gallerydata);
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
        <div className="Home__initial-container">
          <div className="Home__title-div">
            <h1 className="Home__title">
              {" "}
              Transform Your Home with Expert Residential Construction
            </h1>
            <h2 className="Home__subtitle">
              Your Partner for Seamless Permits and Stunning Renovations in
              Miami.
            </h2>
          </div>
          <div className="Home__image-div">
            <img
              className="Home__initial-image"
              src={brickHouse}
              alt="Description"
            />
          </div>
        </div>

        <div className="Home__gallery-div">
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {gallerydata.map((image) => (
              <GalleryImage
                title={image.name}
                key={image.id}
                onClick={handleImageClick(image.id)}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

export default Home;
