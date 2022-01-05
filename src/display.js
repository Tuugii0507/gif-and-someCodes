import React from "react";
import Board from "./boar";
import "./App.css"

const Display = () => {
  const array = [
    [1,2,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];


  return (
    <div>
        {array.map((el, index) => <div key={index} className="row">{ el.map((mal, index) => <Board key={index} />) }</div>)}
    </div>
  );
};
export default Display;
