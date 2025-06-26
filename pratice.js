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


