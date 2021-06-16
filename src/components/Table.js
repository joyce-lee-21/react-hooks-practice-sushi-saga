import React from "react";

function Table({ remainingBal, sushi }) {
  // renders an empty plate for every element in the array
  const plates = sushi.filter(sushi => sushi.eaten === true)
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  // console.log(emptyPlates)
  

  return (
    <>
      <h1 className="remaining">
      {remainingBal > 0 ? `You have: $${remainingBal} remaining!` : "You don't have enough money for sushi!"}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
