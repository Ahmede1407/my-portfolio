import React from "react";

const SkillData = ({ name, percentage, icon }) => {
  return (
    <div className="skills-data">
      <div className="skills-data-title">
        <h3 className="skills-name">{name}</h3>
        <span className="skills-number">{percentage}%</span>
      </div>
      <div className="skills-bar">
        <span
          className="skills-percentage"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </div>
  );
};

export default SkillData;
