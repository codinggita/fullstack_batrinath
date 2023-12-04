import "./counter.css"

import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = ()=>{
    setCount(prv => prv+1)
  }

  const decrement = ()=>{
    setCount(prv => prv-1)
  }
  return (
    <div className="container">
      <h3 className="number">{count}</h3>
      <section className="btns-contaienr">
        <button type="button" onClick={increment} className="increment">+</button>
        <button type="button" onClick={decrement} className="decrement">-</button>
      </section>
    </div>
  );
}

export default Counter;
