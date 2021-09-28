import React from "react";

import Skill from "./Skill";
import { skills } from "../../assests/data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section">
      <h2 className="section-title">Skills</h2>
      <div className="underline"></div>
      <span className="section-subtitle">My technical level</span>

      <div className="skills-container container grid">
        {skills.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
