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

//! leetcode 136. Single Number

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

//! leetcode 169. Majority Element
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

//! leetcode 349. Intersection of two arrays
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

//! leetcode 867. Transpose Matrix

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

//! leetcode 54. Spiral Matrix
// expected output - [1,2,3,4,5,6,7,8,9] ==> [1,2,3,6,9,8,7,4,5]

/*
[repeating these step] 
1. eleminate start_row
2. eleminate last_row
3. eleminate last_col
4. eleminate start_col
*/
var spiralOrder = function (matrix) {
  let start_row = 0;
  let start_col = 0;
  let last_row = matrix.length - 1;
  let last_col = matrix[0].length - 1;

  let result = []; // in the last we return that result bcz expected output is in array

  // after all algorithym
  return result;
};
