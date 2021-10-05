import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

import ToggleThemes from "../ToggleThemes/ToggleThemes";

import "./Navbar.css";
import { links, about } from "../../assests/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);
  const [value, setValue] = useState(0);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y <= 80) {
        setHeaderShadow(false);
      }
      if (y >= 80) {
        setHeaderShadow(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${headerShadow && "header-shadow"}`} id="header">
      <nav className="nav container">
        <div className="nav-logo">{about.fName}</div>

        <div
          className={`${isMenuOpen ? "nav-menu show-menu" : "nav-menu"}`}
          id="nav-menu"
        >
          <ul className="nav-list grid" id="nav-list">
            {links.map((link, index) => {
              const { id, url, icon, text } = link;
              return (
                <li key={id} className="nav-item">
                  <Link
                    to={url}
                    onClick={() => {
                      closeMenu();
                      setValue(index);
                    }}
                    className={`nav-link ${index === value && "active"}`}
                  >
                    {icon} {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <FaTimesCircle className="nav-close" onClick={closeMenu} />
        </div>

        <div className="nav-btns">
          <ToggleThemes />
          <div className="nav-toggle" id="nav-toggle" onClick={openMenu}>
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
