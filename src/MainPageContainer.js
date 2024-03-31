import React, { useState, useEffect } from "react";
import "./MainPageContainer.css";
import wineBottle from "./images/barson-bottle-with-sticker.svg";

export default function MainPageContainer() {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(196, 40, 40, 1)"
  );
  const [backgroundImage, setBackgroundImage] = useState(
    ".images/barsongrapes.svg"
  );

  useEffect(() => {
    const firstTransitionTimeout = setTimeout(() => {
      setBackgroundColor("#461604");
      setBackgroundImage("./images/blueblood-grape-group.svg");
    }, 3000);
    const secondTransitionTimeout = setTimeout(() => {
      setBackgroundColor("#E8E667");
    }, 6000);

    return () => {
      clearTimeout(firstTransitionTimeout);
      clearTimeout(secondTransitionTimeout);
    };
  }, []);

  return (
    <div className="mainPageContainer" style={{ backgroundColor }}>
      <h2 className="wineName">BAR</h2>
      <img className="wineBottleMain" src={wineBottle} alt="Wine bottle" />
      <h2 className="wineName wineName2">SON</h2>
    </div>
  );
}
