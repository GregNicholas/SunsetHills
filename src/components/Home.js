import React from "react";
import { Link } from "react-router-dom";
import background from "../images/skyscraper-row.jpeg";

export default function Home() {
  return (
    <div
      className="container home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="home_info">
        <h1>Sunset Hills</h1>
        <div className="holder clip">
          <div className="circle"></div>
          <div className="circle circle2"></div>
        </div>
        <p style={{ top: "35%" }}>
          Visual demonstration of working with an array. A row of buildings
          representing an array will be colored according to whether they have a
          view of the sunset to the west. Click{" "}
          <Link to="Solve" style={{ color: "white" }}>
            Solve
          </Link>{" "}
          to see it in action.
        </p>
      </div>
    </div>
  );
}
