import React from "react";
import "./footer.css";

import { social, about } from "../../assests/data";

let date = new Date();
let year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container ">
          <div>
            <h1 className="footer-title">
              {about.fName} {about.lName}
            </h1>
            <span className="footer-subtitle">{about.jobTitle}</span>
          </div>

          <div className="footer-socials">
            {social.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        <p className="footer-copy-right">
          &#169; {about.fName}. All copy right reserved {year}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
