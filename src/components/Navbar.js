import React from 'react';
import { useState } from "react";


function Navbar() {
    const [open, setOpen] = useState(false);
    
  return (
    <nav className="d-flex justify-content-between align-items-center p-3">
      <h2 className="m-0">MyLogo</h2>

      {/* MENU */}
        <ul
          className={`list-unstyled m-0 d-md-flex gap-3 mobile-menu ${
            open ? "open d-block" : "closed d-none d-md-flex"
          }`}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>


      {/* HAMBURGER BUTTON */}
      <button 
        className="d-md-none btn"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-list" style={{ fontSize: "1.8rem" }}></i>
      </button>
    </nav>
  );
}

export default Navbar;
