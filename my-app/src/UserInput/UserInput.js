import React from "react"

const userInput=(props)=>{
    const style ={
        border:"3px solid black",
        padding:"15px",
        margin:"15px",
      
    }
    return <input type="text" 
    style={style}
    onChange={props.changed}
    value={props.currentName}
    />
}
export default userInput;

