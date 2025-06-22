//? print number from 20 to 1 in decreasing order while loop

let i = 20;
while (i >= 1) {
  console.log(i);
  i--;
}

//? there is a string in between there is some hashtags so i have to remove that and put in alphabetical order

let str =
  'I love #coding and #problem-solving, #javascript is very popular language but #Python is also a good . #Coding is fun but #Javascript is love';

let newStr = new Set(str
  .split(' ')
  .sort()
  .filter((s) => s.includes('#')));

console.log(newStr);
