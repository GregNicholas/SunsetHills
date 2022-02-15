import React from "react";
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
      <h1>Sunset Hills</h1>
      <div className="holder clip">
        <div className="circle"></div>
        <div className="circle circle2"></div>
      </div>
      <p style={{ top: "35%" }}>
        Enter numbers to represent building heights, and buildings that can see
        the sunset will be displayed in green.
      </p>
    </div>
  );
}
