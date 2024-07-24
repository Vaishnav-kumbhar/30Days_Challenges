// basic error handling
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}

function divides(num1, num2) {
  if (num1 % num2 === 0) {
    throw new Error("denominator is zero");
  } else {
    console.log("fine");
  }
}

try {
  divides(2, 3);
} catch (error) {
  console.log(error);
}

// Finally block
try {
  console.log("try!");
} catch (error) {
  console.log(error);
} finally {
  console.log("finally execute!");
}

// Define the custom error class
class CustomError extends Error {
  constructor(message) {
    super(message); // Pass the message to the parent Error class
  }
}

// Define a function that can throw the custom error
function riskyFunction() {
  try {
    const er = new CustomError("opps!");
    console.log(er);
  } catch (error) {
    console.log("error", error);
  }
}

riskyFunction();

const validation = () => {
  const inputValue = document.querySelector("input").value;

  if (!inputValue) {
    throw new Error("value is empty ");
  } else {
    console.log(inputValue);
  }
};

try {
  document.querySelector("button").addEventListener("click", validation);
} catch (error) {
  console.log(error);
}

// Error Handling in Promises
const promise = new Promise((res, rej) => {
  rej("sorry! please try again later");
});

promise.catch((err) => console.log(err));

async function promise2() {
  function pr() {
    return new Promise((res, rej) => {
      res("promise resolve");
    });
  }
  try {
    const resolveValue = await pr();
    console.log(resolveValue);
  } catch (error) {
    console.log(error);
  }
}

promise2();

// Graceful Error Handling in Fetch
fetch("https://vaihsnavku-adfjfdkfj").catch((err) =>
  console.log(`fetching failed ${err}`)
);

try {
  fetch("https://vaihsnavku-adfjfdkfj");
} catch (error) {
  console.log(error);
}
