// fn declaration
function evenOddCheck(n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

console.log(evenOddCheck(7));

function square(num) {
  return num * num;
}

console.log(square(5));

// fn expression
function findMax(num, n) {
  return Math.max(num, n);
}

console.log(findMax(5, 7));

function str(str) {
  return str + " kumbhar";
}

console.log(str("vaishnav"));

// arrow fn
const fn = (num, n) => {
  return num + n;
};

console.log(fn(10, 5));

const strFn = (str) => {
  if (str.includes("s")) {
    return true;
  }
};

console.log(strFn("vaishnav"));

// fn parameter and default values

function product(camera, mobile = "mobile") {
  return camera, mobile;
}

console.log(product());

const person = (name, age = 30) => {
  return `hello ${name} your age is ${age}`;
};

console.log(person("vaishnav"));

// higer order fn
function hof(fn, n) {
  fn(n);
  fn(n);
  fn(n);
  fn(n);
}

function callback(n) {
  console.log(`i am call back ${n}`);
}

console.log(hof(callback, 10));

const two = (fn, fn2, val) => {
  fn(val), fn2(val);
};

const fn1 = (val) => {
  console.log(`this is first ${val + 5}`);
};
const fn2 = (val) => {
  console.log(`this is second ${val}`);
};

console.log(two(fn1, fn2, 50));
