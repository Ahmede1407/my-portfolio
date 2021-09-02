import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = ({ projects }) => {
  return (
    <div className="section-center portfolio-content grid">
      {projects.map((project) => {
        const { id, title, img } = project;

        return (
          <article key={id} className="portfolio-data">
            <img src={img} alt={title} className="portfolio-img" />
            <div>
              <h3 className="portfolio-data-title">{title}</h3>

              <Link
                className="btn btn-flex btn-link projects-btn"
                to={`/projects/${title}`}
              >
                More Info
                <AiOutlineArrowRight className="btn-icon" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
