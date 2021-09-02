import React, { useState } from "react";

import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";

import "./services.css";
import { services } from "../../assests/data";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { content, firstTitle, lastTitle } = services[value];

  return (
    <section className="services section">
      <h2 className="section-title">Services</h2>
      <div className="underline"></div>
      <span className="section-subtitle">What I can offer you !</span>

      <div className="services-container container grid">
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              onClick={() => setValue(index)}
              className="services-content"
            >
              <div>
                {service.icon}
                <h3 className="services-title">
                  {service.firstTitle} <br /> {service.lastTitle}
                </h3>
              </div>
              <span
                onClick={openModal}
                className="btn btn-flex btn-small btn-link services-btn"
              >
                View More
                <AiOutlineArrowRight className="btn-icon" />
              </span>
            </div>
          );
        })}

        <div className={`services-modal ${isModalOpen && "active"}`}>
          <div className="services-modal-content">
            <h4 className="services-modal-title">
              {firstTitle} <br /> {lastTitle}
            </h4>
            <FaTimesCircle
              onClick={closeModal}
              className="services-modal-close"
            />

            {content.map((contentData) => {
              return (
                <ul
                  key={contentData.id}
                  className="services-modal-services grid"
                >
                  <li className="services-modal-service">
                    <BsCheckCircle className="services-modal-icon" />
                    <p>{contentData.title}</p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
