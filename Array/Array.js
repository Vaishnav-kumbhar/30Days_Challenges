// Array creationg access
const n = [1, 2, 3, 4, 5];
console.log(n);

console.log(n[0], n[4]);

// Array methods
const nums = [1, 2];
nums.push(3); // push add  element end of the array
console.table(nums); // [1.2,3];
nums.pop(); // push remove the last element of an arry
console.table(nums); // [1,2];
nums.shift(); // shift remove the first element of an array
console.log(nums); // [2];
nums.unshift(5); // unshift mehtod of array add a an element in begening of the array
console.log(nums);

//  Array methos (intermediate)
const map = [1, 2, 3, 4, 5];
const doubleNumbers = map.map((el, index) => el * 2);
console.table(doubleNumbers);

const filter = [5, 1, 4, 5, 64, 5, 10];
const greaterNumebersOfFive = filter.filter((el, index) => el > 5);
console.log(greaterNumebersOfFive);

const reduce = [1, 2, 3, 4, 5];
const newNums = reduce.reduce((prev, curr) => prev + curr);
console.log(newNums);

// array iteration
const numbers = [10, 15, 45, 65];
for (let i = 0; i <= 3; i++) {
  console.log(numbers[i]);
}
numbers.forEach((el) => console.log(el));

// multidimensional Array
const multi = [
  [1, 2, 3],
  [4, 5, 6],
  [87, 9],
];
multi.forEach((el, i) => console.log(el, i));
const newm = multi.map((el) => el.filter((e) => e > 3));
console.log(newm);
