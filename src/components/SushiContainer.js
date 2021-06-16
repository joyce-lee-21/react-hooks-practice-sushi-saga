import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, onEatenSushi}) {
  const [sushiPlace, setSushiPlace] = useState(4)

  function onButtonClick(isToggled){
    if (isToggled) {
      setSushiPlace(sushiPlace + 4)
    }
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushi.slice(sushiPlace - 4, sushiPlace).map(object => (
        <Sushi sushi={object} onEatenSushi={onEatenSushi}/>
      ))}
      <MoreButton onButtonClick={onButtonClick}/>
    </div>
  );
}

export default SushiContainer;
