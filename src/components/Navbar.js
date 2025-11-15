import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "fw-bold text-primary" : "";

  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 position-sticky top-0 bg-white shadow-sm" style={{ zIndex: 1000 }}>
      <h2 className="m-0">TechNova Studio</h2>

      {/* MENU DESKTOP */}
      <ul className="navbar-nav ms-auto flex-row gap-4 d-none d-md-flex">
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/")}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/about")}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive("/contact")}`} to="/contact">Contact</Link>
        </li>
      </ul>

      {/* HAMBURGER BUTTON */}
      <button 
        className="d-md-none btn"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
      </button>

      {/* MENU MOBILE */}
      {open && (
        <ul className="navbar-nav gap-2 p-3 bg-white shadow position-absolute top-100 end-0 me-3 d-flex d-md-none rounded">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
