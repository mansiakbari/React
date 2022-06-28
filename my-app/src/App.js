import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

//functional compo
const App = (props)=>{
  const [personState,setPersonState] = useState({           //personState gives acsess to this..setPersonState refer person state at place of this.state 
    persons: [
            { name: "Mansi", age: 20 },
            { name: "Hani", age: 22 },
            { name: "Pari", age: 23 },
          ],
    other:'some other value'
  })
  console.log(personState)
  // onclick manipulate state..
  const switchNameHandler = () => {
    console.log("Button Clicked");
      setPersonState({
      persons: [
        { name: "Mansi AK", age: 20 },
        { name: "Hani PR", age: 22 },
        { name: "Pari PARI", age: 23 },
      ],
    })
    // console.log(setPersonState)
  };
  return (
          <div className="App">
            <h1>Hi...React App</h1>
            <button onClick={switchNameHandler}>Swith Name</button>
            <Person
              name={personState.persons[0].name}
              age={personState.persons[0].age}
            />
            <Person
              name={personState.persons[1].name}
              age={personState.persons[1].age}
            />
            <Person
              name={personState.persons[2].name}
              age={personState.persons[2].age}
            />
          </div>
        );
}
export default App;

//class component..
// export default class App extends Component {
//   //use of state..only use in class..
//   state = {
//     persons: [
//       { name: "Mansi", age: 20 },
//       { name: "Hani", age: 22 },
//       { name: "Pari", age: 23 },
//     ],
//   };
//   //onclick manipulate state..
//   switchNameHandler = () => {
//     console.log("Button Clicked");
//     this.setState({
//       persons: [
//         { name: "Mansi AK", age: 20 },
//         { name: "Hani PR", age: 22 },
//         { name: "Pari PARI", age: 23 },
//       ],
//     })
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>Hi...React App</h1>
//         <button onClick={this.switchNameHandler}>Swith Name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

//regular with functional...state not use in function....
// import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//      {/* <Person name="mansi"/> */}
//     </div>
//   );
// }

// export default App;
