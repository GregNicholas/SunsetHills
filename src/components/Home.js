import React, { useState } from "react";
import background from "../images/skyscrapers.jpg";

export default function Home() {
  return (
    <div
      className="container home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"
      }}
    >
      Home
    </div>
  );
}
