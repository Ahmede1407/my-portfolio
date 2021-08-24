import React from "react";

import { social } from "../../assests/data";
import profilImg from "../../assests/img/perfil.png";
import { IoSend } from "react-icons/io5";
import { BiMouse } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            {social.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  className="home-social-icon"
                >
                  {icon}
                </a>
              );
            })}
          </div>

          <div className="home-img">
            <svg
              className="home-blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home-blob-img"
                  x="12"
                  y="18"
                  href={profilImg}
                />
              </g>
            </svg>
          </div>

          <div className="home-data">
            <h1 className="home-title">HI, I'm Jane Doe</h1>
            <h3 className="home-subtitle">Front-End Developer</h3>
            <p className="home-description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="/contact" className="btn btn-flex">
              Contact Me
              <IoSend className="btn-icon" />
            </a>
          </div>
        </div>

        <div className="home-scroll">
          <a href="/about" className="home-scroll-btn btn-flex">
            <BiMouse className="home-scroll-mouse" />
            <span className="home-scroll-name">Scroll Down</span>
            <AiOutlineArrowDown className="home-scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
