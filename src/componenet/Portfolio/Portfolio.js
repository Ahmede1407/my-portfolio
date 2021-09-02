import React, { useState } from "react";
import Projects from "./Projects";
import Catefories from "./Categories";
import { portfolioProjects } from "../../assests/data";

import "./portfolio.css";

const Portfolio = () => {
  const allCategories = portfolioProjects.map((project) => project.category);
  const uniqueCategories = ["All", ...new Set(allCategories)];

  const [projects, setProjects] = useState(portfolioProjects);
  const [categories, setCategories] = useState(uniqueCategories);

  const filterProjects = (category) => {
    if (category === "All") {
      setProjects(portfolioProjects);
      return;
    }
    const newProjects = portfolioProjects.filter(
      (portfolioProject) => portfolioProject.category === category
    );
    setProjects(newProjects);
  };

  return (
    <section className="portfolio-section section">
      <h2 className="section-title">Portfolio</h2>
      <div className="underline"></div>
      <span className="section-subtitle">My last work</span>

      <div className="portfolio-container container">
        <Catefories filterProjects={filterProjects} categories={categories} />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
