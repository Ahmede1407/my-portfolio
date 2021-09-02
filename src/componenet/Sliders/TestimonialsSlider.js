import React, { useState, useEffect } from "react";
import { reviews } from "../../assests/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import "./slider.css";

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <section className="testimonial section">
      <h2 className="section-title">Testimonials</h2>
      <div className="underline"></div>

      <span className="section-subtitle">our clients review</span>

      <div className="testimonial-container container">
        <div className="slider">
          {reviews.map((review, reviewIndex) => {
            const { id, title, image, name, rating, quote } = review;
            let position = "nextSlide";
            if (reviewIndex === index) {
              position = "activeSlide";
            }
            if (
              reviewIndex === index - 1 ||
              (index === 0 && reviewIndex === reviews.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <figure className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="person-title">{title}</p>
                <p className="person-text">{quote}</p>
                <FaQuoteRight className="person-icon" />
              </figure>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft className="prev-icon" />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight className="next-icon" />
          </button>
        </div>
        {/* {reviews.map((review) => {
            return <h3>will fix it later</h3>;
          })} */}
        {/* <div className="testimonial-content">
            <div className="testimonial-data">
              <div className="testimonial-header">
                <img
                  src={testimonialImg}
                  alt="testimonial img"
                  className="testimonial-img"
                />
                <div>
                  <h3 className="testimonial-name">Jane Doe</h3>
                  <span className="testimonial-client">Client</span>
                </div>
              </div>

              <div>
                <AiFillStar className="testimonial-icon-star" />
                <AiFillStar className="testimonial-icon-star" />
                <AiFillStar className="testimonial-icon-star" />
                <AiFillStar className="testimonial-icon-star" />
                <AiFillStar className="testimonial-icon-star" />
              </div>

              <p className="testimonial-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                corporis aut mollitia esse odio
              </p>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
