import React from "react";

export default function Building({
  windowWidth,
  bldgStats,
  bldgNum,
  handleChangeBuildingHeight
}) {
  let leftPosition;
  if (windowWidth > 500) {
    leftPosition = (windowWidth / 9) * bldgNum + 40;
  } else {
    leftPosition = (windowWidth / 9) * bldgNum + 15;
  }

  console.log(leftPosition);
  const bldgStyle = {
    height: `${bldgStats.height * 50}px`,
    backgroundImage: `${bldgStats.color}`,
    //backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 5px, #28487d 5px, #28487d 10px), repeating-linear-gradient(to right, #617ca2, #617ca2 5px, #28487d 5px, #28487d 10px)",
    position: "absolute",
    bottom: "2rem",
    left: `${leftPosition}px`
  };
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
