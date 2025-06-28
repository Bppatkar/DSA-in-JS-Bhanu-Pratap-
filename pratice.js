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
      str += '*';
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
      str += '*';
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
      str += '*';
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
      str += '*';
    }
    console.log(str);
  }
}

patternPrint(6); */

/* function patternPrint4(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += '*';
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
      str += '*';
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
      str += '*';
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
      str += '*';
    }
    // spaces in the middle
    for (let k = 1; k <= 2 * (n - i); k++) {
      str += ' ';
    }
    // stars on the right
    for (let l = 1; l <= i; l++) {
      str += '*';
    }
    console.log(str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = '';
    // stars on the left
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    // spaces in the middle
    for (let k = 1; k <= 2 * (n - i); k++) {
      str += ' ';
    }
    // stars on the right
    for (let l = 1; l <= i; l++) {
      str += '*';
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

//! leetcode - 121. Best time to Buy and Sell the stock

/* var maxProfit = function (prices) {
  let currMin = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    // can i sell ?
    if (prices[i] > currMin) {
      // you can sell, but check is it better than prev profit ?
      profit = Math.max(profit, prices[i] - currMin);
    }
    // can i Buy ?
    if (prices[i] < currMin) {
      currMin = prices[i];
    }
  }
  return profit;
};

let ans = maxProfit((prices = [7, 1, 5, 3, 6, 4]));
console.log(ans); */

//! leetcode - 88. Merge Sorted Array

/* var merge = function (nums1, m, nums2, n) {
  let result = Array(m + n).fill(0);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      k++;
      j++;
    }
  }

  while (i < m) {
    result[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = nums2[j];
    j++;
    k++;
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }

  console.log(nums1); // Add this line to print the result
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
 */

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

//! leetcode - 485. Max Consecutive Ones
//? given a binary array

/* var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0;
  let finalCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      finalCount = Math.max(currCount, finalCount);
      currCount = 0;
    }
  }
  return Math.max(currCount, finalCount);
};

nums = [1, 0, 1, 1, 0, 1];
// nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
 */

//! solving all pattern problem from strivers dsa sheet [https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa]

//? Striver's DSA pattern Problems

/* function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j <= n; j++) {
      str += '*';
    }
    console.log(str);
  }
}
pattern1(3); */

/* function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let str = ' ';
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
pattern2(5); */
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

/* function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j <= n - i - 1; j++) {
      str += '*';
    }
    console.log(str);
  }
}
pattern5(5); */

function pattern6(n) {}
pattern6(5);
function pattern7(n) {}
pattern7(5);
function pattern8(n) {}
pattern8(5);
function pattern9(n) {}
pattern9(5);
function pattern10(n) {}
pattern10(5);
function pattern11(n) {}
pattern11(5);
function pattern12(n) {}
pattern12(5);
function pattern13(n) {}
pattern13(5);
function pattern14(n) {}
pattern14(5);
function pattern15(n) {}
pattern15(5);
function pattern16(n) {}
pattern16(5);
function pattern17(n) {}
pattern17(5);
function pattern18(n) {}
pattern18(5);
function pattern19(n) {}
pattern19(5);
function pattern20(n) {}
pattern20(5);
function pattern21(n) {}
pattern21(5);
function pattern22(n) {}
pattern22(5);

//! leetcode - 448. Find All Numbers Disappeared in an Array
