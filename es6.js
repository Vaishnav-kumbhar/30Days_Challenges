// Template Literals
let person = `rahul`;
let age = 15;
console.log(`person name is ${person} and age is ${age}`);
console.log(
  `the guy who topped in the 10th standard his name is ${person} and age is ${age}`
);

// destructuring
let a, b, rest;
[a, b] = [10, 20];
console.log(a);

const per = {
  nam: "nitesh",
  ag: 20,
};

const { nam, ag } = per;
console.log(nam, ag);

// spread and rest operator
const n = [1, 2, 3, 4, 5];
const newN = [...n, 6, 7];
console.log(newN);

function sum(...arguments) {
  let sum = arguments.reduce((prev, curr) => prev + curr);
  return sum;
}

console.log(sum(2, 5, 6, 4, 6, 7));

// Default parameter
function pr(num, num1 = 1) {
  return num, num1;
}

console.log(pr(10));

// Enhanced Object Literal
let age2 = 20;
let address = "mumbai";
let pincode = 5005;
const details = {
  age2,
  address,
  pincode,
};

console.log(details);

let lastName = "lastname";
const names = {
  firstName: "rahul",
  [lastName]: "chopra",
};

console.log("full name is" + " " + names.firstName + " " + names.lastname);
