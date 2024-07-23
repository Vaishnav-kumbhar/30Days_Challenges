// Understanding Promise
const promise = new Promise((res, rej) => {
  res("successfull");
}).then((res) => {
  setTimeout(() => {
    console.log(res);
  }, 2000);
});

const promise2 = new Promise((res, rej) => {
  rej("something went wrong");
}).catch((err) => {
  setTimeout(() => {
    console.log(err);
  }, 2000);
});

// Chaining Promise
const promise3 = new Promise((res, rej) => {
  res(fetch("https://api.github.com/users/Vaishnav-kumbhar"));
  rej("some thing went wrong");
});
promise3.then((res) => res.url).catch((err) => console.log(err));

// using Async/Await
const promise4 = new Promise((res, rej) => {
  let bool = true; // you can set false to bool to get the rejection value of this promise

  if (bool) {
    res("this is response");
  } else {
    rej("ERROR: please try again");
  }
});
async function promise4Check() {
  try {
    const res = await promise4;
    console.log(res);
  } catch (error) {
    console.log(`ERROR:${error}`);
  }
}

promise4Check();

// Fetching Data From an API
const api = new Promise((res, rej) => {
  res(fetch("https://jsonplaceholder.typicode.com/users"));
});

api.then((res) => res.json()).then((data) => console.log(data));

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

getData();

// Concurrent Promises
const promise6 = Promise.resolve(3);
const promise7 = Promise.resolve("correct");
const promise8 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise6, promise7, promise8]).then((values) =>
  console.log(values)
);

const promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise10 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise9, promise10]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
