import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          useLocation().pathname !== "/"
            ? "linear-gradient(lightgreen, darkgreen)"
            : "none"
      }}
    >
      <p>©2022 Greg Schoenberg</p>
    </footer>
  );
}
