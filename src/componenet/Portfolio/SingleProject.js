import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolioProjects } from "../../assests/data";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProjectSlider from "../Sliders/ProjectSlider";

const SingleProject = () => {
  const [projectTitle, setProjectTitle] = useState("default project");
  const [technologiesUsed, setTechnologiesUsed] = useState([]);
  const [description, setDescription] = useState("");
  const [demo, setDemo] = useState("");
  const [images, setImages] = useState([]);

  const { title } = useParams();

  useEffect(() => {
    let newProject = portfolioProjects.find(
      (portfolioProject) => portfolioProject.title === title
    );
    setProjectTitle(newProject.title);
    setTechnologiesUsed(newProject.info.technologiesUsed);
    setDescription(newProject.info.description);
    setDemo(newProject.info.demo);
    setImages(newProject.info.infoImages);
  }, []);

  return (
    <div className="single-project-section section">
      <div className="single-project-container container">
        <header>
          <div className="single-project-header">
            <h2 className="section-title single-project-header-title">
              {projectTitle}
            </h2>
            <Link to="/portfolio">
              <FaTimesCircle className="single-project-icon" />
            </Link>
          </div>
        </header>

        <div className="single-project-content">
          <ProjectSlider images={images} />
          <p className="description">{description}</p>
          {technologiesUsed.map((name, index) => {
            return (
              <span key={index} className="technology-name">
                <p>{name}</p>
              </span>
            );
          })}
        </div>

        <a href={demo} className="btn btn-flex btn-small btn-link demo-btn ">
          Live Preview
          <AiOutlineArrowRight className="btn-icon" />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
