/**
 * @file basicjavascript.js
 * @description This file provides a comprehensive introduction to fundamental JavaScript concepts.
 * It covers variables, data types, control flow, functions, arrays, objects,
 * asynchronous programming patterns, DOM manipulation, BOM interactions,
 * prototypes, and common built-in methods.
 * @author Bhanu Pratap Patkar
 * @date 2025-06-20
 *
 * TODO: Review and add more advanced Array and Object methods.
 * BUG: Investigate the 'typeof null' returning 'object' and add a note about it.
 * FIXME: Ensure all example URLs for Fetch/XHR are active.
 */

/**
 * SECTION: 1. Variables and Declarations
 * @description Explains the three primary ways to declare variables in JavaScript: `let`, `const`, and `var`.
 * Highlights their scope and mutability characteristics.
 */
// JavaScript has three main ways to declare variables:

// 1. let: Block-scoped. Can be reassigned but not redeclared in the same scope.
let greeting = 'Hello';
console.log('let variable (initial):', greeting);
greeting = 'Hi there!'; // Reassignment is allowed
console.log('let variable (reassigned):', greeting);
// ! IMPORTANT: Uncommenting the line below will cause a SyntaxError: Identifier 'greeting' has already been declared
// let greeting = 'Hola';

// 2. const: Block-scoped and immutable (cannot be reassigned after initial assignment).
//    For objects and arrays, the reference itself is constant, but their contents can be modified.
const PI = 3.14159;
console.log('const variable:', PI);
// ! IMPORTANT: Uncommenting the line below will cause a TypeError: Assignment to constant variable.
// PI = 3.14;

const user = { name: 'Alice', age: 30 };
console.log('const object (initial):', user);
user.age = 31; // Allowed: modifying object property
console.log('const object (modified):', user);
// ! IMPORTANT: Uncommenting the line below will cause a TypeError: Assignment to constant variable.
// user = { name: 'Bob' }; // Not allowed: reassigning the const reference

// 3. var: Function-scoped (or global-scoped if declared outside any function).
//    Can be reassigned and redeclared. Generally discouraged in modern JS due to hoisting
//    and scope-related issues, which can lead to unexpected behavior.
var legacyVar = 'Old school';
console.log('var variable (initial):', legacyVar);
legacyVar = 'Still here'; // Reassignment allowed
console.log('var variable (reassigned):', legacyVar);
var legacyVar = 'Redeclared!'; // Redeclaration allowed
console.log('var variable (redeclared):', legacyVar);

// Global scope example for var (for demonstration purposes only, avoid global var generally)
var globalMessage = "I'm global!";

function testVarScope() {
  var funcScoped = "I'm function-scoped!";
  console.log('Inside function:', funcScoped);
  console.log('Inside function:', globalMessage); // Accessible due to global scope
}
testVarScope();
// ? QUESTION: Why is 'funcScoped' not accessible here? Because it's function-scoped.
// console.log(funcScoped); // ReferenceError: funcScoped is not defined

/**
 * SECTION: 2. Data Types
 * @description Explores the 8 fundamental data types in JavaScript, including primitives and the `object` type.
 */
console.log('\n--- 2. Data Types ---');

// JavaScript has 8 fundamental data types:

// 1. Number: Represents both integer and floating-point numbers.
let num = 10;
let floatNum = 3.14;
console.log(`Type of ${num}: ${typeof num}`);         // Output: number
console.log(`Type of ${floatNum}: ${typeof floatNum}`); // Output: number

// 2. String: Represents a sequence of characters (text).
let str = 'Hello, JavaScript!';
let anotherStr = "Single quotes work too.";
let templateStr = `You can embed variables like ${num}.`; // Template literals (backticks) for interpolation
console.log(`Type of "${str}": ${typeof str}`);       // Output: string

// 3. Boolean: Represents a logical entity with two values: true or false.
let isTrue = true;
let isFalse = false;
console.log(`Type of ${isTrue}: ${typeof isTrue}`);   // Output: boolean

// 4. Undefined: A variable that has been declared but not yet assigned a value.
let unassigned;
console.log(`Type of ${unassigned}: ${typeof unassigned}`); // Output: undefined
console.log(`Value of unassigned: ${unassigned}`);        // Output: undefined

// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null;
// ! IMPORTANT: 'typeof null' returns 'object', which is a long-standing bug in JavaScript.
console.log(`Type of ${emptyValue}: ${typeof emptyValue}`); // Output: object (Bug/Quirk!)
console.log(`Value of emptyValue: ${emptyValue}`);        // Output: null

// 6. Symbol (ES6): A unique and immutable data type often used for object property keys.
//    Each Symbol value is guaranteed to be unique.
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(`Type of ${String(id1)}: ${typeof id1}`);     // Output: symbol
console.log(`id1 === id2: ${id1 === id2}`);               // Output: false (they are unique symbols)

// 7. BigInt (ES2020): Represents integers with arbitrary precision.
//    Used for numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).
const bigNum = 9007199254740991n + 1n; // 'n' suffix denotes a BigInt literal
console.log(`Type of ${bigNum}: ${typeof bigNum}`);       // Output: bigint

// 8. Object: A collection of key-value pairs (properties).
//    This is the most complex data type and includes:
//    - Plain Objects (`{}`)
//    - Arrays (`[]`, specialized objects for ordered collections)
//    - Functions (`function() {}`, callable objects)
//    - Dates (`new Date()`, objects representing moments in time)
//    - RegExp (`/pattern/`, objects for regular expressions)
//    - ...and many more built-in objects.

let person = {
  name: 'Bhanu',
  age: 23,
  email: 'bhanu@example.com'
};
console.log(`Type of person: ${typeof person}`); // Output: object

let numbersArray = [1, 2, 3, 4, 5];
console.log(`Type of numbersArray: ${typeof numbersArray}`); // Output: object (arrays are indeed objects)

function greetFunction() { return 'Hello!'; }
console.log(`Type of greetFunction: ${typeof greetFunction}`); // Output: function (functions are callable objects)

let today = new Date();
console.log(`Type of today: ${typeof today}`); // Output: object

/**
 * SECTION: 3. Conditional Statements
 * @description Demonstrates how to control the flow of execution based on specific conditions
 * using `if-else if-else`, `switch`, and the ternary operator.
 */
console.log('\n--- 3. Conditional Statements ---');

// Control the flow of execution based on conditions.

// 1. if-else if-else: Executes a block of code if a condition is true.
let temperature = 25;
if (temperature > 30) {
  console.log('It\'s a hot day!');
} else if (temperature > 20) { // If first condition is false, check this one
  console.log('It\'s a pleasant day.');
} else { // If none of the above conditions are true
  console.log('It\'s a bit chilly.');
}

// 2. switch: Evaluates an expression and executes code based on matching cases.
//    The `break` keyword is crucial to prevent "fall-through" to the next case.
let day = 'Thursday';
switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break; // Exit the switch statement
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  case 'Thursday':
    console.log('Today is Thursday');
    break;
  case 'Friday':
    console.log('Today is Friday');
    break;
  case 'Saturday':
  case 'Sunday': // Multiple cases can share a single code block
    console.log('It\'s the weekend!');
    break;
  default: // Executed if no case matches
    console.log('Not a valid day.');
    break;
}

// 3. Ternary Operator (Conditional Operator): A shorthand for simple if-else statements.
let isAdult = (user.age >= 18) ? 'Adult' : 'Minor'; // condition ? valueIfTrue : valueIfFalse
console.log(`User status: ${isAdult}`);

// --- Short-Circuiting in Logical Operators ---
// Logical AND (&&): If the left operand is falsy, the right operand is NOT evaluated. It returns the left operand.
// If the left operand is truthy, it evaluates and returns the right operand.
let resultAND = true && 'Hello'; // resultAND will be 'Hello'
console.log('Logical AND short-circuit (true && "Hello"):', resultAND);
resultAND = false && 'World'; // resultAND will be false, 'World' is not evaluated
console.log('Logical AND short-circuit (false && "World"):', resultAND);

// Logical OR (||): If the left operand is truthy, the right operand is NOT evaluated. It returns the left operand.
// If the left operand is falsy, it evaluates and returns the right operand.
let resultOR = true || 'Goodbye'; // resultOR will be true, 'Goodbye' is not evaluated
console.log('Logical OR short-circuit (true || "Goodbye"):', resultOR);
resultOR = false || 'See ya'; // resultOR will be 'See ya'
console.log('Logical OR short-circuit (false || "See ya"):', resultOR);

// Useful for providing default values: const name = inputName || 'Anonymous';

/**
 * SECTION: 4. Loops
 * @description Illustrates various looping constructs in JavaScript for repeatedly executing code blocks.
 */
console.log('\n--- 4. Loops ---');

// Repeatedly execute a block of code.

// 1. for loop: Executes a block of code a specified number of times.
//    Syntax: for (initialization; condition; increment/decrement)
for (let i = 0; i < 3; i++) {
  console.log(`For loop iteration: ${i}`);
}

// 2. while loop: Executes a block of code as long as a specified condition is true.
//    The condition is checked BEFORE each iteration.
let count = 0;
while (count < 3) {
  console.log(`While loop iteration: ${count}`);
  count++; // Make sure to increment/decrement to avoid infinite loops!
}

// 3. do-while loop: Executes the block of code at least once, then repeats as long as
//    a specified condition is true. The condition is checked AFTER the first iteration.
let doWhileCount = 0;
do {
  console.log(`Do-while loop iteration: ${doWhileCount}`);
  doWhileCount++;
} while (doWhileCount < 3);

// 4. for...of loop (ES6): Iterates over iterable objects (like arrays, strings, Map, Set).
//    Provides direct access to the values.
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// 5. for...in loop: Iterates over enumerable properties (keys) of an object.
//    ! WARNING: Can iterate over inherited properties; use `hasOwnProperty` check or `Object.keys()` for better control.
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
for (const key in car) {
  // Use hasOwnProperty to ensure you're only getting own properties
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}
// Consider using Object.keys(), Object.values(), or Object.entries() for objects when possible.

// --- Loop Control: break and continue ---
// `break`: Immediately exits the current loop (for, while, do-while, switch).
console.log('\nBreak example:');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Breaking the loop at i = 5');
    break; // Exit the for loop
  }
  console.log(`Loop iteration: ${i}`);
} // Loop stops after printing "Loop iteration: 4"

// `continue`: Skips the rest of the current loop iteration and continues with the next iteration.
console.log('\nContinue example:');
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log('Skipping iteration at i = 2');
    continue; // Skip the rest of this iteration (the console.log below)
  }
  console.log(`Loop iteration: ${i}`);
} // Prints 0, 1, skips 2, prints 3, 4


/**
 * SECTION: 5. Functions
 * @description Covers different ways to define functions in JavaScript, including declarations, expressions,
 * and modern arrow functions, along with parameters and arguments.
 */
console.log('\n--- 5. Functions ---');

// Reusable blocks of code that perform a specific task.

// 1. Function Declaration: Defines a named function.
//    * Hoisted: Can be called before its definition appears in the code.
function add(a, b) {
  return a + b;
}
console.log('Function Declaration (add):', add(10, 5));

// 2. Function Expression: Defines a function as part of an expression (e.g., assigned to a variable).
//    * Not Hoisted: Must be defined before calling.
const subtract = function(a, b) {
  return a - b;
};
console.log('Function Expression (subtract):', subtract(10, 5));

// 3. Arrow Functions (ES6): A concise way to write function expressions.
//    * Lexical `this`: They don't have their own `this` context; they inherit it from the surrounding scope.
//    * No `arguments` object, `super`, or `new.target`.
const multiply = (a, b) => a * b; // Implicit return for single expressions
console.log('Arrow Function (multiply):', multiply(10, 5));

const greetUser = (name) => { // Block body requires explicit `return` if a value is returned
  console.log(`Hello, ${name}!`);
};
greetUser('Bhanu');

// Parameters and Arguments:
// Parameters are named variables listed in the function definition (e.g., 'a', 'b' in add(a, b)).
// Arguments are the actual values passed to (and received by) the function when it's called.

// Default Parameters (ES6): Provide default values for parameters if no argument is passed.
function sayHello(name = 'Guest') {
  console.log(`Greetings, ${name}!`);
}
sayHello();       // Output: Greetings, Guest!
sayHello('Emily'); // Output: Greetings, Emily!

// Rest Parameters (ES6): Allows a function to accept an indefinite number of arguments as an array.
function sumAll(...numbers) { // Gathers remaining arguments into an array named 'numbers'
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log('Sum of all numbers (Rest Parameters):', sumAll(1, 2, 3, 4, 5, 6)); // Output: 21

/**
 * SECTION: 6. Arrays
 * @description Covers the creation, access, modification, and common methods for arrays.
 * Arrays are ordered, mutable collections of items.
 */
console.log('\n--- 6. Arrays ---');

// Ordered collections of items. Arrays are special types of objects.

// Creating an array
const fruits = ['apple', 'banana', 'cherry'];
console.log('Initial fruits array:', fruits);

// Accessing elements (zero-indexed)
console.log('First fruit:', fruits[0]);              // Output: apple
console.log('Last fruit:', fruits[fruits.length - 1]); // Output: cherry

// Modifying elements
fruits[1] = 'grape';
console.log('Modified fruits array:', fruits);       // Output: ['apple', 'grape', 'cherry']

// Adding elements
fruits.push('orange'); // Add to the end of the array
console.log('After push:', fruits);                   // Output: ['apple', 'grape', 'cherry', 'orange']
fruits.unshift('kiwi'); // Add to the beginning of the array
console.log('After unshift:', fruits);                // Output: ['kiwi', 'apple', 'grape', 'cherry', 'orange']

// Removing elements
const removedLast = fruits.pop(); // Remove and return the last element
console.log('After pop, removed:', removedLast, 'Array:', fruits); // Output: 'orange', Array: ['kiwi', 'apple', 'grape', 'cherry']
const removedFirst = fruits.shift(); // Remove and return the first element
console.log('After shift, removed:', removedFirst, 'Array:', fruits); // Output: 'kiwi', Array: ['apple', 'grape', 'cherry']

// Array length
console.log('Current array length:', fruits.length); // Output: 3

// Iterating over arrays
console.log('Iterating with forEach:');
fruits.forEach((fruit, index) => { // A common higher-order function for iteration
  console.log(`${index}: ${fruit}`);
});

// Common Array Methods (Higher-Order Functions - take functions as arguments)
const numbers = [1, 2, 3, 4, 5];

// map(): Creates a new array by calling a provided function on every element.
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers (map):', doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers (filter):', evenNumbers);   // Output: [2, 4]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of numbers (reduce):', sum);         // Output: 15

// find(): Returns the value of the first element in the array that satisfies the provided testing function.
const found = numbers.find(num => num > 3);
console.log('First number greater than 3 (find):', found); // Output: 4

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
const foundIndex = numbers.findIndex(num => num === 3);
console.log('Index of 3 (findIndex):', foundIndex); // Output: 2

// some(): Checks if at least one element in the array passes the provided test.
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has at least one even number (some):', hasEven); // Output: true

// every(): Checks if all elements in the array pass the provided test.
const allEven = numbers.every(num => num % 2 === 0);
console.log('All numbers are even (every):', allEven); // Output: false

// sort(): Sorts the elements of an array *in place*. (Default is lexicographical, so provide a compare function for numbers)
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // Numeric sort for ascending order
console.log('Sorted numbers (sort):', unsorted); // Output: [1, 1, 3, 4, 5, 9]

// concat(): Joins two or more arrays. Returns a new array.
const moreNumbers = [6, 7];
const combined = numbers.concat(moreNumbers);
console.log('Combined arrays (concat):', combined); // Output: [1, 2, 3, 4, 5, 6, 7]

// slice(startIndex, endIndex): Returns a shallow copy of a portion of an array into a new array.
//    `endIndex` is exclusive.
const sliced = numbers.slice(1, 4); // Elements from index 1 up to (but not including) 4
console.log('Sliced array (slice):', sliced); // Output: [2, 3, 4]

// splice(startIndex, deleteCount, ...itemsToAdd): Changes the contents of an array by removing,
//    replacing, or adding elements in place. Modifies the original array.
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 99); // At index 2, remove 1 element (3), add 99
console.log('Array after splice (replace):', spliceArray); // Output: [1, 2, 99, 4, 5]
spliceArray.splice(2, 0, 100, 101); // At index 2, remove 0 elements, add 100, 101
console.log('Array after splice (add):', spliceArray); // Output: [1, 2, 100, 101, 99, 4, 5]

/**
 * SECTION: 7. Objects
 * @description Explores the creation, access, modification, and utility methods for JavaScript objects.
 * Objects are unordered collections of key-value pairs.
 */
console.log('\n--- 7. Objects ---');

// Unordered collections of key-value pairs (properties and methods).

// Creating an object (Object Literal Syntax)
const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  isAvailable: true,
  // A method within the object
  displayInfo: function() {
    console.log(`${this.title} by ${this.author} (${this.year})`);
  }
};
console.log('Initial book object:', book);

// Accessing properties
console.log('Book title (dot notation):', book.title); // Preferred for static property names
console.log('Book author (bracket notation):', book['author']); // Useful for dynamic or property names with spaces/special characters

// Modifying properties
book.year = 1926;
console.log('Modified year:', book.year);

// Adding new properties
book.genre = 'Classic';
console.log('Added genre:', book.genre);

// Deleting properties
delete book.isAvailable;
console.log('Object after deleting isAvailable:', book);

// Calling a method
book.displayInfo(); // Output: The Great Gatsby by F. Scott Fitzgerald (1926)

// Object Destructuring (ES6): A convenient way to extract properties from objects into distinct variables.
const { title, author } = book;
console.log(`Destructured: Title: ${title}, Author: ${author}`);

// Spread Operator (...) for Objects (ES9): Used to copy or merge objects.
const newBookDetails = { pages: 180, publisher: 'Scribner' };
// Creates a new object by merging existing properties. If keys overlap, the last one wins.
const fullBook = { ...book, ...newBookDetails, year: 2023 }; // Overwrites 'year'
console.log('Merged object (spread):', fullBook);

// Object methods (Static methods on the `Object` constructor)
console.log('Object.keys():', Object.keys(book));         // Returns an array of property names (keys)
console.log('Object.values():', Object.values(book));       // Returns an array of property values
console.log('Object.entries():', Object.entries(book));     // Returns an array of [key, value] pairs

/**
 * SECTION: 8. Asynchronous JavaScript
 * @description Explores how JavaScript handles long-running operations without blocking the main thread.
 * Covers Callbacks, Promises, Fetch API, Async/Await, and Promise Combinators.
 */
console.log('\n--- 8. Asynchronous JavaScript ---');

// JavaScript's single-threaded nature requires handling long-running operations asynchronously
// to prevent blocking the main thread (improving responsiveness).

// 1. Callbacks (Older approach, can lead to "callback hell" or "pyramid of doom" for complex nested operations)
function getData(url, successCallback, errorCallback) {
  // XMLHttpRequest is an older API for making HTTP requests directly from JavaScript
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      successCallback(xhr.responseText);
    } else {
      errorCallback(`Error: ${xhr.status} - ${xhr.statusText}`);
    }
  };
  xhr.onerror = function() { // Handles network errors
    errorCallback('Network error occurred!');
  };
  xhr.send();
}

// Using a callback for a simple GET request
// @NOTE: Uncomment to run this example in a browser environment.
/*
getData(
  'https://jsonplaceholder.typicode.com/todos/1',
  (data) => console.log('Callback Success (Todo 1):', data),
  (error) => console.error('Callback Error:', error)
);
*/

// 2. Promises (ES6): A cleaner and more structured way to handle async operations.
//    A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., network request, file read)
  setTimeout(() => {
    const success = true; // Set to `false` to test the `catch` block
    if (success) {
      resolve('Data fetched successfully!'); // Fulfills the promise
    } else {
      reject('Failed to fetch data.'); // Rejects the promise
    }
  }, 1000); // 1-second delay
});

myPromise
  .then(data => { // `.then()` is called when the promise resolves
    console.log('Promise resolved:', data);
    return 'Processing complete!'; // Returning a value here creates a new, resolved promise for chaining
  })
  .then(message => { // This `.then()` receives the value from the previous `.then()`
    console.log('Chained promise:', message);
  })
  .catch(error => { // `.catch()` is called if any promise in the chain rejects
    console.error('Promise rejected:', error);
  })
  .finally(() => { // `.finally()` is called regardless of resolution or rejection
    console.log('Promise finished (resolved or rejected).');
  });

// 3. Fetch API (Modern way to make HTTP requests, returns a Promise)
//    Provides a more powerful and flexible feature set than XMLHttpRequest.
// @NOTE: Uncomment to run this example in a browser environment.
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // `response.ok` is true for 2xx status codes
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse response body as JSON (also returns a Promise)
  })
  .then(data => {
    console.log('Fetch API data (Post 1):', data);
  })
  .catch(error => { // Catches errors from the fetch call or from the .json() parsing
    console.error('Fetch API error:', error);
  });
*/

// 4. Async/Await (ES2017): Syntactic sugar built on top of Promises, making async code look synchronous.
//    * `async` function: Always returns a Promise.
//    * `await` keyword: Can only be used inside an `async` function. It pauses the execution of the
//      `async` function until the Promise it's waiting for settles (resolves or rejects).
async function getPostData(postId) {
  try { // Use try-catch to handle errors with await
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Async/Await data (Post ${postId}):`, data);
  } catch (error) {
    console.error(`Async/Await error for Post ${postId}:`, error);
  }
}

// Call the async function
// @NOTE: Uncomment to run these examples.
// getPostData(2);
// getPostData(999); // Example demonstrating error handling for a non-existent post

// 5. Promise Combinators: Static methods on the `Promise` object for managing multiple Promises concurrently.
const p1 = Promise.resolve(3);
const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 500));
const p3 = Promise.reject('Failed p3'); // This promise will reject

// Promise.all(iterable): Waits for *all* Promises in the iterable to settle (resolve or reject).
//    - If ALL resolve, it resolves with an array of their resolved values.
//    - If ANY rejects, `Promise.all` immediately rejects with the first rejection reason.
Promise.all([p1, p2])
  .then(values => console.log('Promise.all (all resolved):', values)) // Output: Promise.all (all resolved): [3, 20]
  .catch(error => console.error('Promise.all (an error occurred):', error));

Promise.all([p1, p3]) // This will immediately reject because p3 rejects
  .then(values => console.log('Promise.all (all resolved):', values))
  .catch(error => console.error('Promise.all (an error occurred):', error)); // Output: Promise.all (an error occurred): Failed p3

// Promise.race(iterable): Returns a Promise that resolves or rejects as soon as *one* of the Promises
//    in the iterable resolves or rejects.
Promise.race([
  new Promise(resolve => setTimeout(() => resolve('A (500ms)'), 500)),
  new Promise(resolve => setTimeout(() => resolve('B (100ms)'), 100))
])
.then(value => console.log('Promise.race (first to settle):', value)); // Output: Promise.race (first to settle): B (100ms)

// Promise.allSettled(iterable) (ES2020): Waits for *all* Promises to settle (either resolve or reject).
//    It always resolves with an array of objects, each describing the outcome of a Promise.
Promise.allSettled([p1, p2, p3])
  .then(results => console.log('Promise.allSettled (all results):', results));
/* Example Output for Promise.allSettled:
[
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 20 },
  { status: 'rejected', reason: 'Failed p3' }
]
*/

// Promise.any(iterable) (ES2021): Returns a Promise that fulfills with the value of the *first* promise
//    in the iterable that fulfills. If all promises in the iterable reject, then the returned promise
//    rejects with an `AggregateError`.
Promise.any([
  Promise.reject('Error 1'),
  new Promise(resolve => setTimeout(() => resolve('Success (100ms)!'), 100)),
  Promise.reject('Error 2')
])
.then(result => console.log('Promise.any (first fulfilled):', result)) // Output: Success (100ms)!
.catch(error => console.error('Promise.any (all rejected):', error));

/**
 * SECTION: 9. Document Object Model (DOM)
 * @description Explains how JavaScript interacts with HTML elements to dynamically change
 * the structure, style, and content of a web page.
 * @NOTE This section's examples are designed to run in a web browser environment.
 * You would typically link this JS file in an HTML file like:
 * `<script src="basicjavascript.js" defer></script>`
 */
console.log('\n--- 9. Document Object Model (DOM) ---');

// The DOM is a programming interface for web documents. It represents the page
// so that programs can change the document structure, style, and content.

// Selecting elements: Finding HTML elements on the page.
// const myHeading = document.getElementById('main-heading'); // By ID (e.g., <h1 id="main-heading">)
// const paragraphs = document.getElementsByClassName('text-paragraph'); // By Class Name (returns live HTMLCollection)
// const firstParagraph = document.querySelector('.text-paragraph'); // First element matching CSS selector
// const allParagraphs = document.querySelectorAll('.text-paragraph'); // All elements matching CSS selector (returns static NodeList)

// Manipulating content: Changing the text or HTML inside elements.
// if (myHeading) {
//   myHeading.textContent = 'Welcome to JavaScript Basics!'; // Safe way to change text (no HTML parsing)
//   myHeading.innerHTML = '<h1><em>Welcome</em> to JS Basics!</h1>'; // Allows changing HTML structure
// }

// Manipulating attributes: Setting or getting HTML attributes.
// if (myHeading) {
//   myHeading.setAttribute('data-info', 'important'); // Set a custom data attribute
//   console.log('Data info attribute:', myHeading.getAttribute('data-info'));
// }

// Manipulating styles: Changing CSS properties directly via JavaScript.
// if (myHeading) {
//   myHeading.style.color = 'blue';
//   myHeading.style.fontSize = '32px';
//   myHeading.style.backgroundColor = '#f0f0f0'; // CSS property names become camelCase
// }

// Adding/Removing CSS classes: A preferred way to apply styles or behaviors.
// if (firstParagraph) {
//   firstParagraph.classList.add('highlight');    // Add a class
//   firstParagraph.classList.remove('text-paragraph'); // Remove a class
//   firstParagraph.classList.toggle('active');    // Adds if not present, removes if present
//   console.log('First paragraph classes:', firstParagraph.classList);
// }

// Creating new elements: Dynamically adding elements to the page.
// const newDiv = document.createElement('div');
// newDiv.textContent = 'This is a new div created by JavaScript.';
// newDiv.style.padding = '10px';
// newDiv.style.border = '1px solid black';
// document.body.appendChild(newDiv); // Append to the body

// Event Listeners: Reacting to user actions or browser events.
// @NOTE: Assume there's an HTML button with id="myButton" in your HTML.
// const myButton = document.getElementById('myButton');

// if (myButton) {
//   myButton.addEventListener('click', () => { // Attach a click event listener
//     console.log('Button was clicked!');
//     if (myHeading) {
//       // Toggle heading color on click
//       myHeading.style.color = myHeading.style.color === 'blue' ? 'red' : 'blue';
//     }
//   });

//   // The Event object provides details about the event that occurred.
//   myButton.addEventListener('mouseover', (event) => {
//     console.log('Mouse over button at:', event.clientX, event.clientY);
//     // event.target refers to the element on which the event listener was placed.
//     event.target.style.cursor = 'pointer'; // Change cursor on hover
//   });

//   // Preventing default behavior
//   // @NOTE: For an anchor tag or form submission.
//   // const myLink = document.getElementById('myLink'); // Assume <a id="myLink" href="https://example.com">Link</a>
//   // if (myLink) {
//   //   myLink.addEventListener('click', (e) => {
//   //     e.preventDefault(); // Stops the browser from navigating to the href
//   //     console.log('Link click prevented. Doing something else instead.');
//   //   });
//   // }
// }

// Event Propagation (Bubbling example): Events "bubble up" the DOM tree by default.
// @NOTE: Requires specific HTML structure for demonstration:
//        <div id="parent-div" style="padding: 20px; background-color: lightblue;">
//          Parent Div
//          <button id="child-button" style="padding: 10px; background-color: lightgreen;">Child Button</button>
//        </div>
// const parentDiv = document.getElementById('parent-div');
// const childButton = document.getElementById('child-button');

// if (parentDiv && childButton) {
//   parentDiv.addEventListener('click', () => {
//     console.log('Parent div clicked (due to bubbling from child)');
//   });

//   childButton.addEventListener('click', (e) => {
//     console.log('Child button clicked!');
//     // e.stopPropagation(); // Uncomment to stop the event from bubbling up to the parent
//   });
// }


/**
 * SECTION: 10. Browser Object Model (BOM)
 * @description Explains how JavaScript interacts with the web browser itself,
 * beyond the content of the document.
 */
console.log('\n--- 10. Browser Object Model (BOM) ---');

// The BOM allows JavaScript to interact with the browser itself.
// Unlike the DOM, there is no official standard for BOM, but its features are widely supported.
// The `window` object is the global object in web browsers.

// 1. `window` object: Represents the browser window or tab.
console.log('Window object properties:');
console.log('Viewport width (excluding scrollbars):', window.innerWidth);
console.log('Viewport height (excluding scrollbars):', window.innerHeight);

// 2. `window.location`: Provides information about, and control over, the current URL.
console.log('Current URL:', window.location.href);
// @NOTE: Uncomment to see effects in browser.
// window.location.reload(); // Reloads the current page
// window.location.assign('https://www.google.com'); // Navigates to a new URL
// window.location.replace('https://www.bing.com'); // Replaces the current entry in history with a new one

// 3. `window.navigator`: Provides information about the user's browser (user agent, platform, etc.).
console.log('Browser user agent string:', window.navigator.userAgent);
console.log('Browser platform:', window.navigator.platform);

// 4. `window.history`: Manages the browser's session history.
// @NOTE: These commands change browser history, use with caution.
// window.history.back();    // Goes back to the previous page in history
// window.history.forward(); // Goes forward to the next page in history
// window.history.go(-2);    // Goes back two pages

// 5. `window.setTimeout()` / `window.setInterval()`: For delayed or repeated execution.
//    `setTimeout`: Executes a function once after a specified delay.
// @NOTE: Uncomment to see effects in console over time.
/*
console.log('Setting a 2-second timeout...');
setTimeout(() => {
  console.log('This message appeared after 2 seconds.');
}, 2000); // Delay in milliseconds

// `setInterval`: Executes a function repeatedly with a fixed time delay between each call.
let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount++;
  console.log(`This message appears every 1 second. (Count: ${intervalCount})`);
  if (intervalCount >= 3) {
    clearInterval(intervalId); // Stop the interval after 3 times
    console.log('Interval stopped.');
  }
}, 1000);
*/

/**
 * SECTION: 11. Prototypes and Prototypal Inheritance
 * @description Delves into JavaScript's unique inheritance model based on prototypes,
 * including constructor functions and ES6 classes.
 */
console.log('\n--- 11. Prototypes and Prototypal Inheritance ---');

// JavaScript uses prototypal inheritance, not classical inheritance (like Java/C++).
// Every object in JavaScript has a private property `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`)
// which points to its prototype object. When a property or method is accessed on an object,
// if it's not found directly on the object, JavaScript looks up the prototype chain.

// 1. Object Literal: Objects created this way directly inherit from `Object.prototype`.
const myObject = {
  value: 10,
  getValue: function() {
    return this.value;
  }
};
console.log('myObject.getValue():', myObject.getValue());
// The prototype of `myObject` is `Object.prototype`
console.log('myObject prototype (Object.getPrototypeOf()):', Object.getPrototypeOf(myObject)); // Often represented as `[Object: null prototype] {}`

// 2. Constructor Function (Older way to create "classes" or blueprints for objects)
function Car(make, model) {
  this.make = make; // Properties directly on the instance
  this.model = model;
}

// Methods added to the `prototype` property of the constructor function are shared among all instances.
// This saves memory as the function is not duplicated for each instance.
Car.prototype.getDetails = function() {
  return `${this.make} ${this.model}`;
};

const car1 = new Car('Honda', 'Civic');
const car2 = new Car('Tesla', 'Model 3');

console.log('car1 details:', car1.getDetails());
console.log('car2 details:', car2.getDetails());

// Check if a property is directly on the object itself (`hasOwnProperty`) or inherited.
console.log('car1 hasOwnProperty(make):', car1.hasOwnProperty('make'));            // Output: true
console.log('car1 hasOwnProperty(getDetails):', car1.hasOwnProperty('getDetails')); // Output: false (it's inherited from Car.prototype)
console.log('car1.__proto__ === Car.prototype:', car1.__proto__ === Car.prototype); // Output: true (demonstrates the prototype link)

// 3. Prototypal Inheritance Chain (how objects inherit from other "parent" objects)
function ElectricCar(make, model, batteryCapacity) {
  Car.call(this, make, model); // Call the `Car` (parent) constructor to inherit its properties (`make`, `model`)
  this.batteryCapacity = batteryCapacity;
}

// Set up the prototype chain: `ElectricCar.prototype` should inherit from `Car.prototype`.
ElectricCar.prototype = Object.create(Car.prototype); // Creates a new object whose prototype is `Car.prototype`
// ! IMPORTANT: After setting the prototype, fix the `constructor` property.
// The `constructor` property normally points back to the constructor function.
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getBatteryInfo = function() {
  return `${this.model} has a ${this.batteryCapacity} kWh battery.`;
};

const tesla = new ElectricCar('Tesla', 'Model S', 100);
console.log('Tesla details (inherited from Car.prototype):', tesla.getDetails());
console.log('Tesla battery info (defined on ElectricCar.prototype):', tesla.getBatteryInfo());
console.log('tesla instanceof Car:', tesla instanceof Car);               // Output: true (it's in the prototype chain)
console.log('tesla instanceof ElectricCar:', tesla instanceof ElectricCar); // Output: true

// 4. ES6 Classes (Syntactic sugar over prototypes): Provide a cleaner syntax for working with prototypes.
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  getType() { // This method is automatically added to Vehicle.prototype
    return `This is a ${this.type} vehicle.`;
  }
}

class Motorcycle extends Vehicle { // `extends` sets up the prototype chain automatically
  constructor(make, model) {
    super('motorcycle'); // Call the parent class's constructor (required in subclasses)
    this.make = make;
    this.model = model;
  }
  getInfo() { // This method is added to Motorcycle.prototype
    return `A ${this.make} ${this.model} (${this.type}).`;
  }
}

const harley = new Motorcycle('Harley-Davidson', 'Fat Boy');
console.log('Harley type (inherited from Vehicle):', harley.getType());
console.log('Harley info:', harley.getInfo());
console.log('harley instanceof Vehicle:', harley instanceof Vehicle); // Output: true


/**
 * SECTION: 12. String Methods
 * @description Provides examples of common built-in methods for manipulating string data.
 */
console.log('\n--- 12. String Methods ---');

const message = '  Hello World! JavaScript is fun.  ';

console.log('Original string:', `"${message}"`);

// 1. `length`: Returns the length of the string
console.log('Length:', message.length); // Output: 34

// 2. `toUpperCase()`: Converts the string to uppercase
console.log('Uppercase:', message.toUpperCase()); // Output: "  HELLO WORLD! JAVASCRIPT IS FUN.  "

// 3. `toLowerCase()`: Converts the string to lowercase
console.log('Lowercase:', message.toLowerCase()); // Output: "  hello world! javascript is fun.  "

// 4. `trim()`: Removes whitespace from both ends of a string
console.log('Trimmed:', `"${message.trim()}"`); // Output: "Hello World! JavaScript is fun."

// 5. `startsWith(searchString)` / `endsWith(searchString)`: Checks if a string starts/ends with a specified value
console.log('Starts with "  Hello":', message.startsWith('  Hello')); // Output: true
console.log('Ends with "fun.  ":', message.endsWith('fun.  '));     // Output: true

// 6. `includes(searchString)`: Checks if a string contains a specified value
console.log('Includes "JavaScript":', message.includes('JavaScript')); // Output: true

// 7. `indexOf(searchString)` / `lastIndexOf(searchString)`: Returns the index of the first/last occurrence, or -1 if not found.
console.log('Index of "World":', message.indexOf('World')); // Output: 5

// 8. `slice(startIndex, endIndex)`: Extracts a part of a string. `endIndex` is exclusive.
console.log('Sliced (index 5 to 11):', message.slice(5, 11)); // Output: "o Worl"

// 9. `substring(startIndex, endIndex)`: Similar to `slice`, but handles negative arguments differently.
console.log('Substring (index 5 to 11):', message.substring(5, 11)); // Output: "o Worl"

// 10. `replace(searchValue, newValue)`: Replaces the first occurrence of `searchValue`.
console.log('Replace first "fun" with "awesome":', message.replace('fun', 'awesome')); // Output: "  Hello World! JavaScript is awesome.  "

// 11. `replaceAll(searchValue, newValue)` (ES2021): Replaces *all* occurrences of `searchValue`.
const allReplaced = 'apple, banana, apple'.replaceAll('apple', 'orange');
console.log('Replace All "apple" with "orange":', allReplaced); // Output: "orange, banana, orange"

// 12. `split(separator)`: Splits a string into an array of substrings based on a separator.
const words = message.trim().split(' ');
console.log('Split into words:', words); // Output: ["Hello", "World!", "JavaScript", "is", "fun."]

// 13. `concat()`: Joins two or more strings. (Often replaced by template literals ` `).
const part1 = 'Good';
const part2 = 'Morning';
console.log('Concatenated:', part1.concat(' ', part2, '!')); // Output: "Good Morning!"

// 14. `charAt(index)`: Returns the character at a specified index.
console.log('Character at index 3:', message.charAt(3)); // Output: 'H'

// 15. `repeat(count)` (ES6): Returns a new string with a specified number of copies.
console.log('Repeated "Hi ":', 'Hi '.repeat(3)); // Output: "Hi Hi Hi "