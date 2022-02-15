import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header-inner">
        <Link to="Home" className="nav-link">
          oldHome
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="Solve" className="nav-link">
          Solve
        </Link>
        <a href="https://github.com" className="nav-link">
          git
        </a>
      </nav>
    </header>
  );
}
