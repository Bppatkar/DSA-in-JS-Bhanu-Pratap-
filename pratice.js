//? print number from 20 to 1 in decreasing order while loop

/* let i = 20;
while (i >= 1) {
  console.log(i);
  i--;
} */

//? there is a string in between there is some hashtags so i have to remove that and put in alphabetical order

/* let str =
  'I love #coding and #problem-solving, #javascript is very popular language but #Python is also a good . #Coding is fun but #Javascript is love';

let newStr = new Set(
  str
    .split(' ')
    .sort()
    .filter((s) => s.includes('#'))
);

console.log(newStr); */

//? print the following pattern

/* function patternPrint1(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += ★;
    }
    console.log(str);
  }
}

patternPrint1(5); */

//* print the following pattern

/* function patternPrint2(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += ' ';
    }
    let stars = i;
    for (let k = 0; k < stars; k++) {
      str += ★;
    }
    console.log(str);
  }
}


patternPrint2(5); */

//? print the following pattern
/* function patternPrint3(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    // spaces
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += ★;
    }

    console.log(str);
  }
}

patternPrint3(5); */

//* print the following pattern

/* function patternPrint(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = n; j > i; j--) {
      str += ★;
    }
    console.log(str);
  }
}

patternPrint(6); */

/* function patternPrint4(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += ★;
    }
    console.log(str);
  }
}
patternPrint4(6); */

//? print the following pattern

/* function patternPrint5(n) {
  // upper part of the pattern
  for (let i = 1; i <= n; i++) {
    let str = '';
    // spaces
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += ★;
    }

    console.log(str);
  }
  // lower part of the pattern
  for (let i = n - 1; i >= 1; i--) {
    let str = '';
    // spaces
    for (let j = 1; j <= n - i; j++) {
      str += ' ';
    }
    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += ★;
    }

    console.log(str);
  }
}

patternPrint5(5); */

//* print the following pattern
/* function patternPrint6(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    // stars on the left
    for (let j = 1; j <= i; j++) {
      str += ★;
    }
    // spaces in the middle
    for (let k = 1; k <= 2 * (n - i); k++) {
      str += ' ';
    }
    // stars on the right
    for (let l = 1; l <= i; l++) {
      str += ★;
    }
    console.log(str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = '';
    // stars on the left
    for (let j = 1; j <= i; j++) {
      str += ★;
    }
    // spaces in the middle
    for (let k = 1; k <= 2 * (n - i); k++) {
      str += ' ';
    }
    // stars on the right
    for (let l = 1; l <= i; l++) {
      str += ★;
    }
    console.log(str);
  }
  
}
patternPrint6(5); */

//! gcd and lcm

/* function lcm(a, b) {
  for (let i = a > b ? a : b; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
}

let ans = lcm(12, 3);
console.log(ans);

function gcf(a, b) {
  for (let i = a < b ? a : b; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
}

let ans2 = gcf(105, 36);
console.log(ans2); */

//? Other method for GCD (greatest common divisor) id Euclidean algorithm [Euclid's algo]
//! fastest method to calculate GCD
/* function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

let ans3 = gcd(105, 36);
console.log(ans3);
 */

//! sum of digits of the number X

/* function sumOfDigits(x) {
  let sum = 0;
  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }
  return sum;
}

let ans4 = sumOfDigits(123);
console.log(ans4); */

//* Fibonacci numbers
//? print the first n fibonacci numbers

/* function fibonacciNumbers(n) {
  if (n == 0) {
    console.log(0);
    return;
  }
  for (let i = 2, a = -1, b = 1; i <= n; i++) {
    if (n == 1) {
      console.log(0);
      console.log(1);
      return;
    }
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

fibonacciNumbers(5); */

// console.log(new Array(5).fill(0).map((_, i) => i + 1));

//! question - [1,0,0,1,1,1,0,1,0,0,1]
// rearragne the data such that all 0's are at the start and all 1's are at the end
// output should be- [0,0,0,0,0,1,1,1,1,1,1]

//* condition is dont create new array and dont use any prebuilt method and you can traverse the array only once

// let arr = [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1];

/* function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function seperate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] === 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

seperate(arr);
console.log(arr); */

//! given a string , try to print the no. of occurences of each character in the string
//Ex. Javascript => j=1, a=2 and so on

/* function occurenceChecker(str) {
  str.split('').forEach((char) => {
    console.log(`${char}:${str.split(char).length - 1}`);
  });
}
occurenceChecker('Javascript'); */

//* other way
/* let str = 'Javascript';
let count = {};
for (let i = 0; i < str.length; i++) {
  if (count[str[i]]) {
    count[str[i]]++;
  } else {
    count[str[i]] = 1;
  }
}
for (let char in count) {
  console.log(`${char}: ${count[char]}`);
} */

//! one more way with for-of loop
/* let str = 'Javascript';
let count = {};
for (const char of str) {
  if (count[char]) {
    // if present update it
    count[char] += 1;
  } else {
    // if not present add it
    count[char] = 1;
  }
}
console.log(count) */

//* write a algorithm to reverse the same array.
//? Note- You should not create a new array
//ex- [5,9,1,8,2,3] => [3,2,8,1,9,5]

/* let arr = [5,9,1,8,2,3];
console.log("without modified original one", arr)
function reverseArr(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

let result = reverseArr(arr);
console.log(result);
console.log("after modified the original one",arr)

 */

//! Number_Diamond_Pattern_23
// expected output - if n = 7 then
/* 
1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7
*/

/* function diamondNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = i - 1;
    let str = '';
    for (let j = 1; j <= spaces; j++) {
      str += ' ';
    }
    let num = i;
    while (num <= n) {
      str += num + ' ';
      num++;
    }
    console.log(str);
  }
  for (let i = 1; i <= n - 1; i++) {
    let str = '';
    let spaces = n - i - 1;
    for (let j = 1; j <= spaces; j++) {
      str += ' ';
    }
    let num = n - i;
    while (num <= n) {
      str += num + ' ';
      num++;
    }
    console.log(str);
  }
}

diamondNumberPattern(7);
console.log('------------------');
diamondNumberPattern(5); */

//! solving all pattern problem from strivers dsa sheet [https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa]

//? Striver's DSA pattern Problems

/* function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j <= n; j++) {
      str += ★;
    }
    console.log(str);
  }
}
pattern1(3); */
// console.log('-------------------------');

/* function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j <= i; j++) {
      str += ★;
    }
    console.log(str);
  }
}
pattern2(5); */
// console.log('-------------------------');

/* function pattern3(n) {
  for (let i = 1; i < n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }
}
pattern3(6); */
// console.log('-------------------------');

/* function pattern4(n) {
  for (let i = 1; i < n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    console.log(str);
  }
}
pattern4(6); */
// console.log('-------------------------');

/* function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= n - i - 1; j++) {
      str += ★;
    }
    console.log(str);
  }
}
pattern5(5); */
// console.log('-------------------------');

/* function pattern6(n) {
  for (let i = 1; i < n; i++) {
    let str = '';
    for (let j = 1; j <= n - i; j++) {
      str += j;
    }
    console.log(str);
  }
}
pattern6(6); */
// console.log('-------------------------');

/* function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    // space
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    //star
    for (let j = 0; j < 2 * i + 1; j++) {
      str += '★';
    }
    //space
    // for (let j = 0; j < n - i - 1; j++) {
    //   str += ' ';
    // }
    console.log(str);
  }
}
pattern7(5);
console.log('-------------------------'); */

/* function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    // space
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    //star
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str += '★';
    }
    //space
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    console.log(str);
  }
}
pattern8(5); */
// console.log('-------------------------');

/* function pattern9(n) {
  // upper part
  for (let i = 0; i < n; i++) {
    let str = '';
    // space
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    //star
    for (let j = 0; j < 2 * i + 1; j++) {
      str += '★';
    }
    //space
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    console.log(str);
  }
  // lower part
  for (let i = 0; i < n; i++) {
    let str = '';
    // space
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    //star
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str += ★;
    }
    //space
    for (let j = 0; j < i; j++) {
      str += ' ';
    }
    console.log(str);
  }
}
pattern9(5); */
// console.log('-------------------------');

/* function pattern10(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let str = '';
    const stars = i < n ? i + 1 : 2 * n - i - 1;
    for (let j = 0; j < stars; j++) {
      str += '★';
    }
    console.log(str);
  }
}
pattern10(4); */
// console.log('-------------------------');

/* function pattern11(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) start = 1;
    else start = 0;
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += start + ' ';
      start = 1 - start;
    }
    console.log(str);
  }
}
pattern11(5); */
// console.log('-------------------------');

/* function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      str += ' ';
    }
    for (let j = i; j >= 1; j--) {
      str += j;
    }
    console.log(str);
  }
}
pattern12(4); */
// console.log('-------------------------');

/* function pattern13(n) {
  for (let i = 1, k = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++, k++) {
      str += k + ' ';
    }
    console.log(str);
  }
}
pattern13(5); */
// console.log('-------------------------');

/* function pattern14(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}
pattern14(5); */
// console.log('-------------------------');

/* function pattern15(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i; j++) {
      str += String.fromCharCode(65 + j);
    }
    console.log(str);
  }
}
pattern15(5); */
// console.log('-------------------------');

/* function pattern16(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i);
    }
    console.log(str);
  }
}
pattern16(5); */
// console.log('-------------------------');

/* function pattern17(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    let charCode = 65;
    for (let j = 1; j <= 2 * i + 1; j++) {
      str += String.fromCharCode(charCode);
      // charCode += j <= i ? 1 : -1;
      if (j <= i) charCode++;
      else charCode--;
    }

    console.log(str);
  }
}
pattern17(4); */
// console.log('-------------------------');

/* function pattern18(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = i; j >= 0; j--) {
      str += String.fromCharCode(65 + n - j - 1);
    }
    console.log(str);
  }
}
pattern18(5); */
// console.log('-------------------------');

/* function pattern19(n) {
  let str = "";
  let iniS = 0;
  
  // Upper part
  for (let i = 0; i < n; i++) {
    // stars
    for (let j = 1; j <= n - i; j++) {
      str += "*";
    }
    // spaces
    for (let j = 0; j < iniS; j++) {
      str += " ";
    }
    // stars
    for (let j = 1; j <= n - i; j++) {
      str += "*";
    }
    iniS += 2;
    str += "\n";
  }
  
  iniS = 2 * n - 2; // Reset space count for lower part
  
  // Lower part
  for (let i = 1; i <= n; i++) {
    // stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    // spaces
    for (let j = 0; j < iniS; j++) {
      str += " ";
    }
    // stars
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    iniS -= 2;
    str += "\n";
  }
  
  return str;
}

let ans = pattern19(5); // You can change this number
console.log(ans); */
// console.log('-------------------------');

/* function print20(n) {
  let str = "";
  let spaces = 2 * n - 2;
  
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    if (i > n) stars = 2 * n - i;
    
    // Left stars
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }
    
    // Spaces
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    
    // Right stars
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }
    
    str += "\n";
    
    // Update spaces for next iteration
    if (i < n) {
      spaces -= 2;
    } else if (i >= n) {
      spaces += 2;
    }
  }
  
  return str;
}

console.log(print20(5)); */
// console.log('-------------------------');

/* function print21(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
        pattern += "*";
      } else {
        pattern += " "; 
      }
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(print21(5)); */
// console.log('-------------------------');

/* function print22(n) {
  let pattern = "";
  const size = 2 * n - 1;
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const top = i;
      const left = j;
      const right = (2 * n - 2) - j;
      const bottom = (2 * n - 2) - i;
      
      // Find the minimum distance to any border
      const minDist = Math.min(
        Math.min(top, bottom),
        Math.min(left, right)
      );
      
      // Calculate the number to print
      pattern += (n - minDist);
    }
    pattern += "\n";
  }
  
  return pattern;
}

console.log(print22(4)); */
// console.log('-------------------------');

//* given an array print all subarrays of the givem array. [you can print in any order]
// it is a contiguous cross-section of your array

/* [1,2 ,3 ,4]
so output should be - 
[1]
[2]
[3]
[4]
[1,2]
[2,3]
[1,2,3]
[2,3,4]
[1,2,3,4] 
these all are sub-array of [1,2,3,4]
*/

/* //? solution
function printSubArray(arr) {
  for (let start = 0; start < arr.length; start++) {
    let str = '';
    for (let end = start; end < arr.length; end++) {
      str += arr[end] + ' ';
      console.log(str);
    }
  }
}
printSubArray([1, 2, 3, 4]); */

//! 2D array
/* let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let arr1 = [[1], [1, 2], [1, 2, 3], [4]]; */
//Inner array can be of different size

/* //* To create a 2d array of 5X6 {5 rows and 6 columns} and array cell of the 2d array should 0.

let arr = Array(5);
for (let i = 0; i < 5; i++) {
  let inner = Array(5).fill(1);
  arr[i] = inner;
}
// console.log(arr);

arr[0][1] = 5;
console.log(arr);
 */

//? Print all elements of this 2d grid row by row
// expected o/p - 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
/* function display(grid) {
  let str = '';
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      str += grid[i][j] + ' ';
    }
  }
  console.log(str);
}

let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

display(grid); */

//* Given a 2D array, Print it in a Column wave form.

// expected o/p -
/* 
 1  2  3  4
 5  6  7  8
 9  10 11 12
 13 14 15 16
 17 18 19 20 

 */
//? Wave Print
/* function displayWavePrint(grid, m, n) {
  let str = '';
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m; row++) {
      str += grid[row][col] + ' ';
    }
  }
  console.log(str);
}

let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
displayWavePrint(grid, 5, 4); */

//? if we want to print some cols from down to up we need to reverse the inner loop
// using same upper wave print problem
//* even cols - up to down
//* odd cols - down to up

/* function displayWavePrint(grid, m, n) {
  let str = '';
  for (let col = 0; col < n; col++) {
    if (col % 2 == 0) {
      // even cols - up to down
      for (let row = 0; row < m; row++) {
        str += grid[row][col] + ' ';
      }
    } else {
      // odd cols - down to up
      for (let row = m - 1; row >= 0; row--) {
        str += grid[row][col] + ' ';
      }
    }
  }
  console.log(str);
}

let grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
displayWavePrint(grid, 5, 4); */

//? this function will not work in rectangle matrix
// so we change in our logic and doint by creating other matrix

/* var transpose = function (matrix) {
  let resultArr = Array(matrix[0].length);
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = Array(matrix.length);
    resultArr[i] = arr;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       resultArr[j][i] = matrix[i][j];
    }
  }
  return resultArr;
}; */

//? Given 2, 2D arrays where the first 2d array has a dimension (m,n) and the second 2d array has a dimension (n, k), multiply both the 2d arrays.
//* condition - we can only multiply if no. of cols of 1st array is equal to no. of rows of 2nd array

//! Multiply Matrix
/* function MultiplyMatrix(a, m, n, b, n, k) {
  let c = Array(m);
  for (let i = 0; i < m; i++) {
    c[i] = Array(k).fill(0);
  }

  // increase over every cell of c
  for (let i = 0; i < m; i++) {
    // go to every row of c
    for (let j = 0; j < k; j++) {
      // for each row go to every col of c
      for (let x = 0; x < n; x++) {
        c[i][j] += a[i][x] * b[x][j];
      }
    }
  }
  console.log(c)
}

const a = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // 3x2

const b = [
  [7, 8, 9],
  [10, 11, 12],
]; // 2x3

MultiplyMatrix(a, 3, 2, b, 2, 3); */

//! left rotation by 'K' Element without using extra space
/* let arr = [1, 2, 3, 4, 5];
let k = 3; // no. of times to be rotated

leftRotataion(0, k - 1);
leftRotataion(k, arr.length - 1);
leftRotataion(0, arr.length - 1);
console.log(arr);

function leftRotataion(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
} */

//* using nested loops
/* function leftRotataion(arr, n, k){
  k = k%n;
  for (let i = 0; i < k; i++) {
    let temp = arr[0];
    for (let j = 0; j < n-1; j++) {
      arr[j] = arr[j+1];
    }
    arr[n-1] = temp;
  }
  console.log(arr);
} */

// let arr = [1, 2, 3, 4, 5];
// leftRotataion(arr, 5, 3);

/* //! merging two sorted array
let arr1 = [2, 7, 8, 5];
let arr2 = [1, 3, 4, 6, 9];
function mergeSortedArray(arr1, m, arr2, n) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let newArr = new Array(m + n).fill(0);
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr[k++] = arr1[i++];
    } else {
      newArr[k++] = arr2[j++];
    }
  }
  while (i < arr1.length) {
    newArr[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    newArr[k++] = arr2[j++];
  }
  return newArr;
}

let ans = mergeSortedArray(arr1, arr1.length, arr2, arr2.length);
console.log(ans);
 */

// ____________________String________________________________________________________________-

/* //* Check Presence of Character
console.log(str.includes('z'));
console.log(str.indexOf('k'));
console.log(str.lastIndexOf('a'));
 */

//* check string are equal or not
/* let str = 'vaishali';
let str1 = 'vaishali';
console.log(str.localeCompare(str1));
// -1 (& if strings are equal it return 0)
 */

//* Replace Substring
/* const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. " */

//* Substring of a String
/* const str = 'Vishal is Best Frontend Developer. Vishal is Best Developer. ';
console.log(str.substring(6, 30));
console.log(str.slice(-10, -1)); */

//* Split and Join
/*  const str = 'Vishal is Best Frontend Developer. Vishal is Best Developer. ';

console.log(str.split(''));
const subString = str.split(' ');
console.log(subString.join(' ')); */

//* String Start and End
/* console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true */

//* Trim and Case Conversion
/* const str = 'Vishal is Best Frontend Developer. Vishal is Best Developer.';
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
 */

/* //* Convert Number and Object to String
const num = 123;
console.log(num, num.toString());

const obj = {
  name: 'Vishal',
  course: 'DSA with Vishal',
};
console.log(obj, JSON.stringify(obj));

//* Concatenate Strings
let firstName = 'Bhanu';
const lastName = 'Patkar';
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, ' is a', ' Best'));
 */

//! Print Each Character in new row;
/* let str = 'Suryavansham';
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}*/

//! reverse a string
/* let str = 'bhanu';
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log(reversedStr);
 */

//! string is palindrom or not
/* let str = 'naman';
let rev = '';
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
if (rev == str) console.log('it is palindrom');
else console.log('it is not palindrom'); */

//* one more way to check palindrom or not
/* let str = 'malayalam';
let isPalindrom = true;

for (let i = 0; i < str.length; i++) {
  if (str[i] != str[str.length - 1 - i]) {
    isPalindrom = false;
    break;
  }
}

if (isPalindrom) console.log('It is Palindrom');
else console.log('It is not Palindrom');
 */