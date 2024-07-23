// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

// while loop
let n = 0;
let num = 1;
while (n <= 10) {
  n += num;
  n++;
  console.log(n);
}

let ten = 10;
while (ten >= 1) {
  console.log(ten);
  ten--;
}

let one = 1;
do {
  console.log(`while ${one}`);
  one++;
} while (one <= 5);

let min_ten = 10;
do {
  console.log(`minus ${min_ten}`);
  min_ten--;
} while (min_ten >= 1);

// nested loops
for (let i = 1; i <= 5; i++) {
  let str = "*";
  console.log(str.repeat(i));
}

// continue keyword
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// break keywords
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
