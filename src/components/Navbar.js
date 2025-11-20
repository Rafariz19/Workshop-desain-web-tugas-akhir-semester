import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? "active fw-bold" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        {/* LOGO DI KIRI */}
        <Link className="navbar-brand fw-bold logo" to="/">
          <img
            src="/assets/lokalsumenep.png"
            alt="TechNova"
            style={{ height: "40px" }}
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            {/* HOME */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                Home
              </Link>
            </li>

            {/* SERVICES dengan Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                className={`nav-link dropdown-toggle ${isActive("/services")}`}
                to="/services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showDropdown}
              >
                Services
              </Link>
              <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" to="/services1">
                    Konsultasi Transformasi Digital
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services2">
                    Pengembangan Aplikasi
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services3">
                    Pembuatan Website & Company Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services4">
                    IT Infrastructure Setup & Modernization
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services5">
                    Cloud Migration & Cloud Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services6">
                    Cybersecurity Assessment
                  </Link>
                </li>
              </ul>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} to="/about">
                About
              </Link>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact")}`} to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;