import { use, useState } from "react";
import "../css/state.css";

const State = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  const handleIncrement = () =>{
    setCount (count + 1)
  }
  const handleDecrement = () =>{
    if (count > 0){
      setCount (count - 1)
    }
  }
  const handleRedChange = () =>{
    if (color !== "red"){
      setColor("red")
    }
  }
   
  return (
    <>
    <div>
      <div className="buttons">
        <h1>{count}</h1>
          <button className="btn1" onClick={handleIncrement}>increment</button>
          <button className="btn2" onClick={handleDecrement}>decrement</button>
      </div>
      <div className="container" style={{paddingTop: "40px"}}>
        <div className="color-container" style={{backgroundColor: color, width: "400px", height: "400px"}}>
        </div>
          <button className="btn1" style={{width: "45px", backgroundColor: "Red", border: "none", borderRadius: "5px", color: "azure"}} onClick={handleRedChange}>Red</button>
          <button className="btn1"style={{width: "45px", height: "38px", backgroundColor: "blue", border: "none", borderRadius: "5px", color: "azure"}} onClick={()=> setColor("Blue")}>Blue</button>
      </div>
    </div>
    </>
  );
};

export default State;
