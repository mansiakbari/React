import React, { useState } from "react";
const style={
    backgroundColor:"pink",
    border: "10px solid #f3f3f3",
    bordertop: "10px solid #3498db",
    borderradius: "50%",
    width: "80px",
    height: "80px",
    margin: "30px",
    animation: "spin 1s linear infinite",
    Transform:"360deg"
}
function Button(props) {
    const[isLoading,setIsLoading]=useState(false)    
    const handleSubmit=async()=>{
        setIsLoading(true)
        await new Promise(resolve=>setTimeout(resolve,2000))
        setIsLoading(false)
    }
  return (
    <div>
    <center>
      <button onClick={handleSubmit} disabled={isLoading} style={style}>
      {isLoading && (
      <span
        class='spinner-border spinner-border-sm'
        role="status"
        aria-hidden="true" />
      )}
       {props.name}</button>
       </center>
    </div>
  );
}
export default Button;
