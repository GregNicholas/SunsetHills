import React, { useState, useEffect } from "react";
import Building from "./Building";

export default function Solve() {
  const [width, setWidth] = useState(window.innerWidth);

  const bluePaint =
    "repeating-linear-gradient(to bottom, transparent, transparent 5px, #28487d 5px, #28487d 10px), repeating-linear-gradient(to right, #617ca2, #617ca2 5px, #28487d 5px, #28487d 10px)";
  const orangePaint =
    "repeating-linear-gradient(to bottom, transparent, transparent 5px, #FF9B00 5px, #FF9B00 10px), repeating-linear-gradient(to right, #A28A61, #A28A61 5px, #FF9B00 5px, #FF9B00 10px)";

  const [buildings, setBuildings] = useState([
    { height: 1, color: orangePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint },
    { height: 1, color: bluePaint }
  ]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const handleChangeBuildingHeight = (index, height) => {
    let bHeight = height;
    if (bHeight >= 10) {
      bHeight = 10;
    }
    if (bHeight < 0) {
      bHeight = 0;
    }
    const newArr = [...buildings];
    newArr[index].height = bHeight;
    newArr.forEach((building, i) => {
      const hasView = checkView(i, building.height);
      building.color = hasView ? orangePaint : bluePaint;
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
        Enter values representing height units of each buildings. Buildings that
        are taller than those in front of it and can see the sunset to the west
        from the roof will be colored orange. Change any value and see them
        update in real time.
      </p>
      <div className="sun"></div>
      <section className="buildings">
        {buildings.map((building, i) => {
          return (
            <Building
              key={i}
              windowWidth={width}
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
