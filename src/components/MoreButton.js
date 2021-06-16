import React  from "react";

function MoreButton({onButtonClick}) {
  // const [isToggled, setIsToggled] = useState(false)

  function handleClick() {
    console.log("clicked!")
    return onButtonClick(true)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
