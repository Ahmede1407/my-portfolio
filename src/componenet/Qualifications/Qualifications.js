import React, { useState } from "react";
import "./qualification.css";
import QualificationContent from "./QualificationContent";
import { qualifications } from "../../assests/data";

const Qualifications = () => {
  const [value, setValue] = useState(0);

  const { content } = qualifications[value];

  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Prsonal Journey</span>

      <div className="qualification-container container">
        {/* Tabs Container */}
        <div className="qualification-tabs">
          {qualifications.map((qualification, index) => {
            return (
              <div
                key={qualification.id}
                onClick={() => setValue(index)}
                className={`qualification-btn btn-flex ${
                  index === value && "active"
                }`}
              >
                {qualification.icon}
                {qualification.title}
              </div>
            );
          })}
        </div>

        {/* Content Container */}
        <QualificationContent content={content} />
      </div>
    </section>
  );
};

export default Qualifications;
