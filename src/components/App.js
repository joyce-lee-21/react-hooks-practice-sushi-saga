import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [sushiBal, setSushiBal] = useState(100)
  // const [sushiPlate, setSushiPlate] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data.map(obj => {
      return {
        id: obj.id,
        name: obj.name,
        img_url: obj.img_url,
        price: obj.price,
        eaten: false
      }
    })))
  },[])

  function onEatenSushi(eatenSushi) {
    if (eatenSushi.eaten === false) {
      // setting the eaten status on child component that is also getting passed up
      eatenSushi.eaten = true 
      setSushiBal(sushiBal - eatenSushi.price)
    }
  }
  // console.log(sushiBal)

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatenSushi={onEatenSushi}/>
      <Table sushi={sushi} remainingBal={sushiBal}/>
    </div>
  );
}

export default App;