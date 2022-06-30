import React from "react"
import "./UserOutput.css"

const userOutput=(props)=>{
   
    return(
    <div className="UserOutput">
        <p>USERNAME : {props.userName}</p>
        <p>Another Random Text</p>
      
    </div>
    )
}
export default userOutput;