import React, { useState } from "react";

export default function Building({
  bldgStats,
  bldgNum,
  handleChangeBuildingHeight
}) {
  const bldgStyle = {
    height: `${bldgStats.height * 50}px`,
    backgroundImage: `${bldgStats.color}`,
    //backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 5px, #28487d 5px, #28487d 10px), repeating-linear-gradient(to right, #617ca2, #617ca2 5px, #28487d 5px, #28487d 10px)",
    position: "absolute",
    bottom: "2rem",
    left: `${bldgNum * 60 + 100}px`
  };
  // console.log(bldgStyle);
  return (
    <div className="building" style={bldgStyle}>
      <input
        type="number"
        value={bldgStats.height}
        onChange={(e) => handleChangeBuildingHeight(bldgNum, e.target.value)}
      />
    </div>
  );
}
