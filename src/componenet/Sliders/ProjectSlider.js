import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./slider.css";

const ProjectSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="slider project-slider">
      {images.map((img, imgIndex) => {
        let position = "nextSlide";
        if (imgIndex === index) {
          position = "activeSlide";
        }
        if (
          imgIndex === index - 1 ||
          (index === 0 && imgIndex === img.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <figure className={position} key={imgIndex}>
            <img src={img.img} alt="project img" className="project-img" />
          </figure>
        );
      })}
      <button
        className="project-slider-prev prev"
        onClick={() => setIndex(index - 1)}
      >
        <FiChevronLeft className="prev-icon" />
      </button>
      <button
        className="project-slider-next next"
        onClick={() => setIndex(index + 1)}
      >
        <FiChevronRight className="next-icon" />
      </button>
    </div>
  );
};

export default ProjectSlider;
