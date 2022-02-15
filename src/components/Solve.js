import React, { useState } from "react";
import Building from "./Building";

export default function Solve() {
  return (
    <div className="container solve">
      <h2>Sunset Hills</h2>
      <div className="holder clip holder_solve">
        <div className="circle"></div>
        <div className="circle circle2"></div>
      </div>
      <p>
        A row of buildings with heights of entered values will check if they
        have clear views of the sunset to the west
      </p>
      <section className="buildings">
        <Building />
        <Building />
      </section>
    </div>
  );
}
