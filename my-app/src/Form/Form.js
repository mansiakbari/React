import React from "react";

const Form = ({ sendDataToParent }) => {
  const [mathMark, setmathMark] = React.useState("");
  const [phyMark, setphyMark] = React.useState("");
  const [chmMark, setchmMark] = React.useState("");

  const handleSubmit = (e) => {
    sendDataToParent(mathMark, phyMark, chmMark);
    e.preventDefault();
    // console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <br></br>
          <label>Name : </label>
          <input type="text" />
        </div>
        <br></br>
        <div>
          <label>Marks : </label>
          <input
            type="number"
            value={mathMark}
            onChange={(event) => {
              setmathMark(event.target.value);
            }}
          />

          <input
            type="number"
            value={phyMark}
            onChange={(event) => {
              setphyMark(event.target.value);
            }}
          />
          <input
            type="number"
            value={chmMark}
            onChange={(event) => {
              setchmMark(event.target.value);
            }}
          />
        </div>
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
