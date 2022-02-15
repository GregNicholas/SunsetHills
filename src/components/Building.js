import React, { useState } from "react";

export default function Building({
  bldgStats,
  bldgNum,
  handleChangeBuildingHeight
}) {
  //const [enteredHeight, setEnteredHeight] = useState(1);
  //const [buildingHeight, setBuildingHeight] = `${enteredHeight * 50}px`;

  const bldgStyle = {
    height: `${bldgStats.height * 50}px`,
    backgroundColor: `${bldgStats.color}`,
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
