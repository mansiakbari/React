import "./App.css";
// import React, { useState } from "react";
import React, { Component } from "react";
import Person from "./Person/Person";

// // //functional compo
// // const App = (props)=>{
// //   const [personState,setPersonState] = useState({           //personState gives acsess to this..setPersonState refer person state at place of this.state
// //     persons: [
// //             { name: "Mansi", age: 20 },
// //             { name: "Hani", age: 22 },
// //             { name: "Pari", age: 23 },
// //           ],
// //     other:'some other value'
// //   })
// //   console.log(personState)
// //   // onclick manipulate state..
// //   const switchNameHandler = () => {
// //     console.log("Button Clicked");
// //       setPersonState({
// //       persons: [
// //         { name: "Mansi AK", age: 20 },
// //         { name: "Hani PR", age: 22 },
// //         { name: "Pari PARI", age: 23 },
// //       ],
// //     })
// //     // console.log(setPersonState)
// //   };
// //   return (
// //           <div className="App">
// //             <h1>Hi...React App</h1>
// //             <button onClick={switchNameHandler}>Swith Name</button>
// //             <Person
// //               name={personState.persons[0].name}
// //               age={personState.persons[0].age}
// //             />
// //             <Person
// //               name={personState.persons[1].name}
// //               age={personState.persons[1].age}
// //             />
// //             <Person
// //               name={personState.persons[2].name}
// //               age={personState.persons[2].age}
// //             />
// //           </div>
// //         );
// // }
// // export default App;

//class component..
export default class App extends Component {
  //use of state..only use in class..
  state = {
    persons: [
      { id: "ab", name: "Mansi", age: 20 },
      { id: "abab", name: "Hani", age: 22 },
      { id: "ababab", name: "Pari", age: 23 },
    ],
    otherState: "other value",
    showPersons: false,
  };
  //onclick manipulate state..
  // switchNameHandler = (newName) => {
  //   console.log("Button Clicked");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 20 },
  //       { name: "Hani PR", age: 22 },
  //       { name: "Pari PARI", age: 23 },
  //     ],
  //   });
  // };
  //on name change
  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "skyblue",
      font: "inherit",
      border: "3px solid pink",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Mansi AKBARI")}
            changed={this.nameChangeHandler}
          >
            My Hobbies : Racing{" "}
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi...React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          List Persons
        </button>
        {persons}
      </div>
    );
  }
}

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

//........Assignment Solution [App.js].......

// import React,{Component} from "react";
// import UserInput from "./UserInput/UserInput";
// import UserOutput from "./UserOutput/UserOutput";
// // import "./UserOutput.css"

// export default class App extends Component {
//   state={
//     username :"MANSI ak"
//   }
//   usernameChangedHandler=(event)=>{
//     // console.log(event, 'event')
//     this.setState({username: event.target.value});

//   }
//   render() {
//     return (
//       <div>
//       <UserInput changed={this.usernameChangedHandler}
//        currentName={this.state.username}
//       />
//       <UserOutput userName={this.state.username}/>
//       <UserOutput userName="Pari"/>
//       <UserOutput userName="Hani"/>
//       </div>
//     )
//   }
// }
