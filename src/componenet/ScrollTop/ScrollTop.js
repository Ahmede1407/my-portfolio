import React, { useState, useEffect, useCallback } from "react";
import "./scrollTop.css";
import { TiArrowUpThick } from "react-icons/ti";

const ScrollTop = () => {
  const [scrollTopArrow, setScrollTopArrow] = useState(false);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    if (window.scrollY <= 400) {
      setScrollTopArrow(false);
    }
    if (window.scrollY >= 400) {
      setScrollTopArrow(true);
    }
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const toTop = "#";
  return (
    <div>
      <a
        href={toTop}
        className={`scroll-top ${scrollTopArrow && "show-arrow"}`}
      >
        <TiArrowUpThick className="scroll-top-icon" />
      </a>
    </div>
  );
};

export default ScrollTop;
