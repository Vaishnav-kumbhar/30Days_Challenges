// if-Else-Statements
let n = 10;
if (n % 2 === 0) {
  console.log("postive");
}

let vote = 17;
if (vote >= 18) {
  console.log("your are eligible");
} else {
  console.log("you are not eligible");
}

// Nested if-Else Statements
let num = 600;
let max = 500;
if (num === max) {
  console.log("true");
} else if (num <= 100) {
  console.log("may be");
} else {
  console.log(`${num} is grater than ${max}`);
}

let day = "thursday";
switch (day) {
  case "monday":
    console.log("its monday");
    break;
  case "tuesday":
    console.log("its tuesday");
    break;
  case "wednesday":
    console.log("its wednesday");
    break;
  case "thursday":
    console.log("its thursday");
    break;
  case "friday":
    console.log("its friday");
    break;
  case "saturday":
    console.log("its saturday");
    break;
  case "sunday":
    console.log("its sunday");
    break;
}

// Combinig Conditions
let year = new Date().getFullYear();
if (year % 100 === 0 ? Math.floor(year % 400 === 0) : year % 4 === 0) {
  console.log("year is a leap year");
} else {
  console.log("year is not  a leap year");
}

if (year % 100 === 0) {
  return console.log("true");
} else {
  console.log("false");
}
