import React, { useState } from "react";
import { ReactComponent as FastorLogo } from "/components/Logo.5a0cac78.png"; 
const RestaurantImageOverlay = () => {
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });

  const handleLogoDrag = (e) => {
    const newX = e.clientX; 
    const newY = e.clientY;
    setLogoPosition({ x: newX, y: newY });
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <FastorLogo
        style={{
          position: "absolute",
          top: logoPosition.y,
          left: logoPosition.x,
        }}
        draggable
        onDrag={(e) => handleLogoDrag(e)}
      />
    </div>
  );
};

export default RestaurantImageOverlay;
