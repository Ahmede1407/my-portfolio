import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

import "./Navbar.css";
import { links } from "../../assests/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo">
          Jane
        </Link>

        <div
          className={`${isMenuOpen ? "nav-menu show-menu" : "nav-menu"}`}
          id="nav-menu"
        >
          <ul className="nav-list grid" id="nav-list">
            {links.map((link) => {
              const { id, url, icon, text } = link;
              return (
                <li key={id} className="nav-item">
                  <Link to={url} className="nav-link" onClick={closeMenu}>
                    {icon} {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <FaTimesCircle className="nav-close" onClick={closeMenu} />
        </div>

        <div className="nav-btns">
          <div className="nav-toggle" id="nav-toggle" onClick={openMenu}>
            <AiOutlineAppstore />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
