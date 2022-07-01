import React, { useState } from "react";

function Toggle(props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen === true && (
        <button onClick={() => setIsOpen(false)}>Collapse</button>
      )}
      {isOpen === false && (
        <button onClick={() => setIsOpen(true)}>{props.label}</button>
      )}
      {isOpen && (
        <div>
          Click Again !!
          {props.children}
        </div>
      )}
    </div>
  );
}
export default Toggle;

// An ornamental stand and used as a piece of decorative furniture in room.
