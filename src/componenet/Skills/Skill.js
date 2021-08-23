import React, { useState } from "react";
import SkillData from "./SkillData";
import { FaAngleDown } from "react-icons/fa";

const Skill = ({ icon, title, subtitle, data }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <div
      className={`skills-content ${
        isListOpen ? "skills-open" : "skills-close"
      }`}
    >
      <div className="skills-header" onClick={toggleList}>
        {icon}
        <div>
          <h1 className="skills-title">{title}</h1>
          <span className="skills-subtitle">{subtitle}</span>
        </div>
        <FaAngleDown className="skills-arrow" />
      </div>

      <div className="skills-list grid">
        {data.map((skillData) => {
          return <SkillData key={skillData.id} {...skillData} />;
        })}
      </div>
    </div>
  );
};

export default Skill;
