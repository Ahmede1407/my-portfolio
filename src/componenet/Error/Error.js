import React from "react";
import { FaGhost } from "react-icons/fa";
import "./error.css";

const Error = () => {
  return (
    <div className="error">
      <main className="error-main">
        <h1 className="error-404">
          4
          <span className="error-img">
            <FaGhost />
          </span>
          4
        </h1>
        <h2 className="error-subtitle">Error: 404 page not found</h2>
        <p className="error-description">
          Sorry, the page you're looking for cannot be accessed
        </p>
      </main>
    </div>
  );
};

export default Error;
