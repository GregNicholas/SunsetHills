import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header-inner">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="Solve" className="nav-link">
          Solve
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          Github
        </a>
        <a
          href="https://gregschoenberg.com"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          Portfolio
        </a>
      </nav>
    </header>
  );
}
