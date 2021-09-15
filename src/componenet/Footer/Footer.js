import React from "react";
import "./footer.css";

import { social } from "../../assests/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Jane Doe</h1>
            <span className="footer-subtitle">Front-End Developer</span>
          </div>

          <div className="footer-socials">
            {social.map((socialLink) => {
              const { id, url, icon } = socialLink;
              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  className="footer-social"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        <p className="footer-copy-right">
          &#169; Jane. All copy right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
