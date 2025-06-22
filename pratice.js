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

/* 
function patternPrint(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

patternPrint(5);
patternPrint(3); 
*/

//* print the following pattern

/* function patternPrint(n) {
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

patternPrint(5); */

//? print the following pattern
/* function patternPrint(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      str += ' ';
    }
    let stars = 2 * i - 1;
    for (let k = 0; k < stars; k++) {
      str += '*';
    }

    console.log(str);
  }
}

patternPrint(6); */

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

patternPrint(6);
 */

/* function patternPrint(n) {
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
patternPrint(6);
 */