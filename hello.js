//class
class Human {
  constructor() {
    this.gender = "female";
  }
  printGender() {
    console.log(this.gender);
  }
}
class person1 extends Human {
  constructor() {
    super();
    this.name = "mansi";
  }
  printName() {
    console.log(this.name);
  }
}
const person = new person1();
person.printName();
person.printGender();

//without constructor..with new syntax
class Human1 {
  gender = "male";

  print = () => {
    console.log(this.gender);
  };
}
class person2 extends Human1 {
  name = "mansi ak";

  namePrint = () => {
    console.log(this.name);
  };
}
const per = new person2();
per.print();
per.namePrint();

//spread
const number = [1, 2, 3];
const newnum = [...number, 4, 5];
console.log(newnum);
//in object
const personobj = {
  name: "mansi",
};
const newobj = {
  ...personobj,
  age: 20,
};
console.log(newobj);

//rest
const fil = (...arg) => {
  return arg.filter((el) => el === 1);
};
console.log(fil(1, 2, 1));

//destructuring..extract arry el and obj and store them into variables
// let num1, num3;
const numbers = [1, 2, 3];
  [num1 , , num3] = numbers;
console.log(num1, num3);

//number,string bollean are primitive types
//object and array are referance types..in this copy the pointer in memory...change in one..affect in all...for copy use of (...)

//map
const multiply=[1,2,3];
const newMul=multiply.map((num)=>{
  return num*2
});
console.log(multiply)
console.log(newMul)