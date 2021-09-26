import React, { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

import "./toggleThemes.css";

const ToggleThemes = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem("theme-color");
    if (theme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleToggle = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      setIsDark(false);
      document.body.classList.remove("dark-theme");
    } else {
      localStorage.setItem("theme-color", "dark");
      setIsDark(true);
      document.body.classList.add("dark-theme");
    }
  };

  return (
    <div className="change-theme" onClick={handleToggle}>
      {isDark ? <FiSun /> : <FaRegMoon />}
    </div>
  );
};

export default ToggleThemes;
