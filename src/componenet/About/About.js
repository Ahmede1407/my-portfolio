import React from "react";

// import aboutImg from "../../assests/img/about.jpg";
// import cv from "../../assests/pdf/C.V.pdf";

import { about } from "../../assests/data";

import { BiDownload } from "react-icons/bi";

import "./about.css";

const About = () => {
  const aboutDescription = about.description;
  const aboutInfo = about.info;
  const aboutImg = about.img;
  const aboutCV = about.cv;

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="underline"></div>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={aboutImg} alt="about" className="about-img" />

        <div className="about-data">
          <p className="about-description">{aboutDescription}</p>

          <div className="about-info">
            {aboutInfo.map((info) => {
              const { id, name, title } = info;
              return (
                <div key={id}>
                  <span className="about-info-title">{title}</span>
                  <span className="about-info-name">
                    {name.fName} <br /> {name.lName}{" "}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="about-btns">
            <a download="" href={aboutCV} className="btn btn-flex">
              Download CV <BiDownload className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
