import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const homeStyle =
    useLocation().pathname !== "/" ? "nav-link" : "nav-link active";
  const solveStyle =
    useLocation().pathname !== "/" ? "nav-link active" : "nav-link";

  return (
    <header>
      <nav className="header-inner">
        <Link to="/" className={homeStyle}>
          Home
        </Link>
        <Link to="Solve" className={solveStyle}>
          Solve
        </Link>
        <a
          href="https://github.com/GregNicholas/SunsetHills"
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
