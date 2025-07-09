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

//! leetcode - 448. Find All Numbers Disappeared in an Array
/* var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]);
    let index = x - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  let resultArr = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      resultArr.push(j + 1);
    }
  }
  return resultArr;
};
 */

//! leetcode - 167. Two Sum II - Input Array is Sorted
/* var twoSum = function (numbers, target) {
  let start = 0,
  end = numbers.length - 1;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else {
      start++;
    }
  }
}; */

//! leetcode - 136. Single Number

//? Approach 1: Freq Map
/* 
[4,1,2,1,3,2,3] 
{
  1: 2,
  2: 2,
  3: 2,
  4: 1
} 
*/

//? Approach 2: using operator [Bitwise XOR]
/* 
{
a b result
0 0  0
1 0  1
0 1  1
1 1  0
}
in XOR table - if we xor two same value the ans is zero 0, whereas xor of a value with 0, gives the same value.
[4,1,2,1,3,2,3] so if we xor that values - 4 ^ 1 ^ 2 ^ 1 ^ 3 ^ 2 ^ 3 --> all same values becomes 0 means we get
 4 ^ 0 --> so in xor table  ," xor of a value with 0, gives the same value" so we got value 4 that is our ans.
*/
/* 
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// let nums = [2, 2, 1];
let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); */

//! leetcode - 169. Majority Element
/* var majorityElement = function (nums) {
  let currPosibleMajority = -1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      currPosibleMajority = nums[i];
    }
    if (currPosibleMajority == nums[i]) {
      count++;
    } else count--;
  }
  return currPosibleMajority;
};
console.log(majorityElement([2,2,1,1,1,2,2])) */

//! leetcode - 349. Intersection of two arrays
//? one way of solving question
/* var interSection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let resultArr = [];
  for (let num of set1) {
    if (set2.has(num)) {
      resultArr.push(num);
    }
  }
  return resultArr;
}; */

//? other way to solve the same ans
/* var interSection = function (nums1, nums2) {
  let freqNums1 = {};
  for (let i = 0; i < nums1.length; i++) {
    let element = nums1[i];
    if (freqNums1[element]) {
      freqNums1[element]++;
    } else {
      freqNums1[element] = 1;
    }
  }
  let freqNums2 = {};
  for (let i = 0; i < nums2.length; i++) {
    let element = nums2[i];
    if (freqNums1[element]) {
      freqNums2[element] = 1;
    }
  }
  return Object.keys(freqNums2);
}; 

let nums1 = [4, 9, 5];
// let nums1 = [1, 2, 2, 1];
let nums2 = [9, 4, 9, 8, 4];
// let nums2 = [2, 2];
// let nums1 = [2, 9, 1, 2, 2, 3, 9];
// let nums2 = [2, 1, 1, 7, 6, 8, 3];
console.log(interSection(nums1, nums2));
*/
//? if got error in leetcode submission
// fix return - Object.keys(freqNums2).map(Number);

//! leetcode - 867. Transpose Matrix

/* var transpose = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
transpose(matrix); */

//! leetcode - 54. Spiral Matrix
// expected output - [1,2,3,4,5,6,7,8,9] ==> [1,2,3,6,9,8,7,4,5]

/*
[repeating these step] 
1. eleminate start_row
2. eleminate last_row
3. eleminate last_col
4. eleminate start_col
*/
/* var spiralOrder = function (matrix) {
  let m = matrix.length; // no of rows
  let n = matrix[0].length; // no of cols
  let start_row = 0;
  let start_col = 0;
  let last_row = matrix.length - 1;
  let last_col = matrix[0].length - 1;
  let count = 0;

  let result = []; // in the last we return that result bcz expected output is in array

  while (count < n*m) {
    //eleminate the starting row
    for (let i = start_col; i <= last_col; i++) {
      result.push(matrix[start_row][i]);
      count++; // because we added a new element
    }
    start_row += 1;
    if (count == n * m) break;

    // eleminate the last col
    for (let i = start_row; i <= last_row; i++) {
      result.push(matrix[i][last_col]);
      count++;
    }
    last_col -= 1;
    if (count == n * m) break;

    // eleminate the last row
    for (let i = last_col; i >= start_col; i--) {
      result.push(matrix[last_row][i]);
      count++;
    }
    last_row -= 1;
    if (count == n * m) break;

    //eleminate the start col
    for (let i = last_row; i >= start_row; i--) {
      result.push(matrix[i][start_col]);
      count++;
    }
    start_col += 1;
    if (count == n * m) break;
  }

  // after all algorithym
  return result;
};
 */

//! leetcode - 566. Reshape the Matrix
/* var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;

  // cannot do reshape
  // [when no of element in original matrix and no. of element in expected matrix is diff]
  if (n * m !== r * c) return mat;

  let row = 0;
  let col = 0;
  let result = Array(r);

  for (let i = 0; i < r; i++) {
    result[i] = Array(c).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let element = mat[i][j];
      result[row][col] = element;
      col++;
      if (col == c) {
        row++;
        col = 0;
      }
    }
  }
  return result;
}; */

//! leetcode - 1275. Find Winner on a Tic Tac Toe Game
/* let mp = {
  A: 'X',
  B: '0',
};

function winCheck(grid, player) {
  //checks row
  // row 0
  if (
    grid[0][0] == mp[player] &&
    grid[0][1] == mp[player] &&
    grid[0][2] == mp[player]
  )
    return true;
  // row 1
  if (
    grid[1][0] == mp[player] &&
    grid[1][1] == mp[player] &&
    grid[1][2] == mp[player]
  )
    return true;
  // row 2
  if (
    grid[2][0] == mp[player] &&
    grid[2][1] == mp[player] &&
    grid[2][2] == mp[player]
  )
    return true;

  //checks col
  // col 0
  if (
    grid[0][0] == mp[player] &&
    grid[1][0] == mp[player] &&
    grid[2][0] == mp[player]
  )
    return true;
  // col 1
  if (
    grid[0][1] == mp[player] &&
    grid[1][1] == mp[player] &&
    grid[2][1] == mp[player]
  )
    return true;
  // col 2
  if (
    grid[0][2] == mp[player] &&
    grid[1][2] == mp[player] &&
    grid[2][2] == mp[player]
  )
    return true;

  //checks diagonal
  // diagonal 0
  if (
    grid[0][0] == mp[player] &&
    grid[1][1] == mp[player] &&
    grid[2][2] == mp[player]
  )
    return true;
  // diagonal 1
  if (
    grid[2][0] == mp[player] &&
    grid[1][1] == mp[player] &&
    grid[0][2] == mp[player]
  )
    return true;
  return false;
}

var tictactoe = function (moves) {
  let turn = 0;
  let grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    let currMove = moves[i];
    let x = currMove[0];
    let y = currMove[1];
    let player = turn == 0 ? 'A' : 'B';

    if (turn == 0 && grid[x][y] == ' ') {
      grid[x][y] = 'X';
    } else if (turn == 1 && grid[x][y] == ' ') {
      grid[x][y] = '0';
    }
    count++;
    let doesPlayerWin = winCheck(grid, player);
    if (doesPlayerWin) {
      return player;
    }
    if (count == 9) {
      return 'Draw';
    }
    turn = (turn + 1) % 2;
  }
  return 'Pending';
}; */

//! leetcode - 344. Reverse String
/* var reverseString = function(s) {
    let i = 0;
    let j = s.length -1;
    while(i<=j){
        let temp = s[i];
        s[i]= s[j]
        s[j] = temp;
        i++;
        j--;
    }
};
 */

//! leetcode - 1. two sum
/* var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}; */

//! leetcode - 977. Squares of a Sorted array
//* solving via inbuilt method
/* var sortedSquares = function (nums) {
  console.log(nums.map((e) => (e < 0 ? e * -1 : e) ** 2).sort((a, b) => a - b));
}; */

//* other way [simple for loop]
/* var sortedSquares = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] ** 2);
  }
  return result.sort((a, b) => a - b);
}; */
//* other way [in above method we take extra array]
/* var sortedSquares = function (nums) {
  // let result = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] ** 2;
  }
  nums.sort((a, b) => a - b);
  return nums;
}; */
//* other way {more optimise}[squaring a number is always return a +ve no.]
//? using two pointer approach - first or smallest value and last or largest value can decide which is biggest and second biggest value [-7,-3, -2, -1, 0, 1, 2, 3, 5] (-7 is smallest but if we squareup it becomes 49 which is bigger than square of 5)
/* var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = nums.length - 1;
  let result = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }
  return result;
}; 

let ans = sortedSquares([-4, -1, 0, 3, 10]);
console.log(ans);
// sortedSquares([-7, -3, 2, 3, 11]); */

//! leetcode - 15. 3Sum
/* var threeSum = function (nums) {
  const result = [];

  // Sort the array first - this is crucial for the two-pointer approach
  nums.sort((a, b) => a - b);

  // Fix the first element (c in your terminology)
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const target = -nums[i]; // This is -c, what we want a + b to equal
    let left = i + 1; // Start pointer (a)
    let right = nums.length - 1; // End pointer (b)

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        // Found a triplet!
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < target) {
        // Sum is too small, move left pointer right
        left++;
      } else {
        // Sum is too large, move right pointer left
        right--;
      }
    }
  }

  return result;
}; */

//*other way
/* 
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]]);
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}; 
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = threeSum(nums);
console.log('Output:', triplets);
*/

//! leetcode - 532. K-diff Pairs in an Array

//* using Two Pointers with Sorting approach because
//Sorting helps us:
// 1. Avoid duplicate pairs (since duplicates will be next to each other after sorting).
// 2. Use two pointers efficiently to find pairs with difference k.

/* var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // Skip duplicates (avoid counting same pair again)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      let diff = nums[j] - nums[i];

      if (diff == k) {
        // console.log(`Pair found: nums[i] = ${nums[i]}, nums[j] = ${nums[j]}`);
        result++;
        break;
      } else if (diff > k) {
        break;
      }
    }
  }
  return result;
};

let nums = [3, 1, 4, 1, 5],
  k = 2;
let ans = findPairs(nums, k);
console.log(ans);
 */

//! leetcode - 11. Container with Most Water
// simple two pointer approach
/* var maxArea = function (height) {
  let s = 0,
    ans = 0;
  let e = height.length - 1;
  while (s < e) {
    let width = e - s;
    ans = Math.max(ans, width * Math.min(height[s], height[e]));
    if (height[s] <= height[e]) s++;
    else e--;
  }
  return ans;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result); */

//! leetcode - 849. Maximize Distance to Closest Person
/* var maxDistToClosest = function (seats) {
  let max = 0;
  let prev = -1;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (prev === -1) max = i;
      else max = Math.max(max, (i - prev) / 2);
      prev = i;
    }
  }
  max = Math.max(max, seats.length - 1 - prev);
  return Math.floor(max);
};
let seats = [1, 0, 0, 0, 1, 0, 1];
let result = maxDistToClosest(seats);
console.log(result); */

//! leetcode 26. remove duplicate from sorted array
/* var removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
};
let result = removeDuplicates((nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(result); */

//! leetcode 122. Best Time to Buy and Sell Stock II
/* var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
let result = maxProfit((prices = [7, 1, 5, 3, 6, 4]));
console.log(result); */

//*______________________________________________________________________
/* 
“You only need 25 questions to learn all the DSA patterns” — The Coding Interview Bootcamp

//! But but but....
//* Final Thought
//* The goal isn’t to memorize 25 problems but to learn 25 ways of thinking. Once you internalize these patterns, you can tackle most interview questions efficiently.

Why rush solving 500+ random problems? Save this list of 25 questions that are most frequently asked in tech interviews:

Arrays / Two Pointers / Hashing
1. 3Sum: https://lnkd.in/gev7gEzS
2. Container With Most Water: https://lnkd.in/gY2vxRMn
3. Longest Consecutive Sequence: https://lnkd.in/gMWgaJhS

Strings
4. Longest Substring Without Repeating Characters: https://lnkd.in/gCPCfm89
5. Minimum Window Substring: https://lnkd.in/gHn6tqru

Dynamic Programming (DP)
6. Climbing Stairs: https://lnkd.in/gMAZA-aw
7. House Robber: https://lnkd.in/g2a7USsS
8. Longest Palindromic Substring: https://lnkd.in/gKW4rFzN
9. Coin Change: https://lnkd.in/ggfk-rKw
10. Partition Equal Subset Sum: https://lnkd.in/guvDMreS

Trees / Binary Trees / BST
11. Binary Tree Level Order Traversal: https://lnkd.in/gfdAa3qW
12. Diameter of Binary Tree: https://lnkd.in/gJE6Rf3c
13. Lowest Common Ancestor of a BST: https://lnkd.in/gaPQwZP7

Backtracking
14. Subsets: https://lnkd.in/gX9kHr7g
15. Combination Sum: https://lnkd.in/gPa3pd_R
16. Word Search: https://lnkd.in/gtAvSg9P

Linked List
17. Reverse Linked List: https://lnkd.in/g-rU_g2i
18. Linked List Cycle: https://lnkd.in/g4jxKvVb
19. Merge Two Sorted Lists: https://lnkd.in/gDwNRASd

Stack
20. Valid Parentheses: https://lnkd.in/gNX7aNsz
21. Daily Temperatures: https://lnkd.in/gc-GC4iq

Graphs / BFS / DFS / Union-Find
22. Number of Islands: https://lnkd.in/g7gxPyqP
23. Clone Graph: https://lnkd.in/gd5-Xrrf
24. Course Schedule: https://lnkd.in/gMtQhFeM
25. Redundant Connection: https://lnkd.in/gNYT4EFR
*/
