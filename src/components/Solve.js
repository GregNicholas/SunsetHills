import React, { useState } from "react";
import Building from "./Building";

export default function Solve() {
  const [buildings, setBuildings] = useState([
    { height: 1, color: "green" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" },
    { height: 1, color: "gray" }
  ]);

  const handleChangeBuildingHeight = (index, height) => {
    if (height > 10) {
      height = 10;
    }
    if (height < 0) {
      height = 0;
    }
    const newArr = [...buildings];
    newArr[index].height = height;
    newArr.forEach((building, i) => {
      const hasView = checkView(i, building.height);
      building.color = hasView ? "green" : "gray";
    });
    setBuildings((prev) => {
      return newArr;
    });
  };

  const checkView = (index, bldgHeight) => {
    if (index === 0) {
      return true;
    }
    for (let i = 0; i < index; i++) {
      if (buildings[i].height >= bldgHeight) {
        return false;
      }
    }
    return true;
  };

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
        {buildings.map((building, i) => {
          return (
            <Building
              bldgStats={building}
              bldgNum={i}
              handleChangeBuildingHeight={handleChangeBuildingHeight}
            />
          );
        })}
      </section>
    </div>
  );
}
