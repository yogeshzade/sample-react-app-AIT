import React, { useState } from "react";

function CounterFuncComp() {
  const [counter,setCounter] = useState(0);
  const [inputvalue, setInputvalue]=useState("yogesh");
  const increment =()=>{
    setCounter(counter+1)
  }

const decrement=()=>{
  setCounter(counter-1)
}

const handleChange=(e)=>{
  const updatedValue=e.target.value;
  setInputvalue(updatedValue);
}
  return (
    <div className="container">
      <h2>CounterFuncComp</h2>
      <p>{counter}</p>
      <button className="btn btn-secondary" onClick={increment}>Increment</button>
      <button className="btn btn-primary" onClick={decrement}>Decrement</button>
      <div>
      <input placeholder="Enter....." onChange={handleChange}/>{inputvalue}
      </div>
      
    </div>
  );
}

export default CounterFuncComp;
