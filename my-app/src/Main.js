import React, { useState } from "react";
import Loader from "./Ex_col/Loader";
function Button({ isLoading, children, ...props }) {
  return <button {...props}>{isLoading ? <Loader /> : children}</button>;
}
function Example() {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  return (
    <div>
      <center>
        <h1>
          <Button
            onClick={() => {
              setIsButtonLoading(true);
              setTimeout(() => {
                setIsButtonLoading(false);
              }, 1000);
            }}
            isLoading={isButtonLoading}
          >
            Mansi Akbari
          </Button>
        </h1>
      </center>
    </div>
  );
}
export default Example;
