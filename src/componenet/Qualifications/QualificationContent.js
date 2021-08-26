import React from "react";
import { BiCalendar } from "react-icons/bi";

const QualificationContent = ({ content }) => {
  return (
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
  );
};

export default QualificationContent;
