// Object creation and access
// this keyword use
const book = {
  title: "time",
  author: "vaishnav",
  year: 2024,
  fn: () => {
    return `this is properties of book object ${book.title}, ${book.author}`;
  },
  update: function (year) {
    this.year = year;
  },

  method: function () {
    return `${this.title} book author name is ${this.author} it published in ${this.year}`;
  },
};

// object methos
console.log(book);
const author = book.author;
const title = book.title;
console.log(title, author);
console.log(book.fn());
book.update(2005);
console.log(book);

// nested object
const library = [
  { title: "rich dad", year: 2004, author: "padman" },
  { title: "mukti", year: 2012, author: "dinesh" },
  { title: "sceince", year: 2006, author: "rahul" },
  { title: "eco", year: 2007, author: "virat" },
];

console.log(library);
const til = library.map((title) => title.title);
console.log(til);
const auth = library.map((author) => author.author);
console.log(auth);
console.log(book.method());

// access keys of book object using for in loop
// object iteration
for (const key in book) {
  console.log(book[key]);
}
console.log(Object.keys(book), Object.values(book));
