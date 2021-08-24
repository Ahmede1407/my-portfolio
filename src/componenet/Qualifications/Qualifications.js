import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import "./qualification.css";
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
        <div className="qualification-sections">
          <div className="qualification-content">
            {content.map((contentData) => {
              const {
                id,
                contentTitle,
                contentSubtitle,
                contentStartDate,
                contentEndDate,
              } = contentData;
              if (id % 2 === 0) {
                return (
                  <div key={id} className="qualification-data">
                    <div></div>
                    <div>
                      <div className="qualification-rounder"></div>
                      <div className="qualification-line"></div>
                    </div>
                    <div>
                      <h3 className="qualification-title">{contentTitle}</h3>
                      <span className="qualification-subtitle">
                        {contentSubtitle}
                      </span>

                      <div className="qualification-calender">
                        <BiCalendar />
                        {contentStartDate} - {contentEndDate}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div key={id} className="qualification-data">
                  <div>
                    <h3 className="qualification-title">{contentTitle}</h3>
                    <span className="qualification-subtitle">
                      {contentSubtitle}
                    </span>

                    <div className="qualification-calender">
                      <BiCalendar />
                      {contentStartDate} - {contentEndDate}
                    </div>
                  </div>

                  <div>
                    <div className="qualification-rounder"></div>
                    <div className="qualification-line"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
