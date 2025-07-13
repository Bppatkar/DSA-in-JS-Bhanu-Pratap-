//? What is Data Structure? and  What is Algorithm?

//* Data Structure are storage models which helps us to store data in efficient manner for diff use cases.
// examples of Data Structure are Arrays, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs
// in array we store data in contigous memory locations/linearly.

//* Algorithm are set of steps to solve a problem, or we can say that define steps that helps us to achieve a task in efficient manner.

//------------- Technique [Trick] -------------------
//! Two pointer
// we will be able to apply this technique in Arrays,String, Linked Lists, Stacks, etc and other Data structures
//* MIMP technique which asked in interviews .

//? two pointer name dosent mean u take 2 variables, u can take more than 2 variables

//? prepare 2, to 3 variables and then you place these variables on diff parts of input
// example if we have an array - [1,2,3,4,5] then we can use 2 pointers one at the start of the array and one at the end of the array
// or we can put both 2 pointers on the start of array
// or if we have 3 elemets then, we can put two at the start and one at the end

// now we put these pointers on diff diff positions now we try to move then, so while moving them , we tried to discard somepart of data structure

// to learn this we solve leetcode problem - 344. Reverse String
// to learn more about this technique visit - https://www.geeksforgeeks.org/two-pointer-technique/

//------------- Time and Space Complexity Analysis / Algorithym Analysis -------------------

//! Time and Space Complexity Analysis
//* 1) Efficiency of an Algorithym in terms of time taken is important [means how much time it takes to solve the problem]
//* 2) Efficiency of an Algorithym in terms of space/memory taken is important [means how much space/memory it takes to solve the problem]
//* 3) Input (What size of input it takes, how input is you giving) directly affects the course of  time and space complexity or algorithym execution , and based on this we are going to decide which algorithym is better or which algorithym is more efficient
//* 4) always we care , how the algorithym are performing for large input size [means how much time it takes to solve the problem]

//? Term - "Rate of Growth" - means , Rate at which running time increases as a function of input size is called "Rate of Growth"
// rate of growth simply meaans - at what rate you are changing the running time as a function of input size increases or decreases
// that is , how fast your rate of change of time is increasing

//! two observation - 1) whenever we are comparing algorithm, we don't care about small input sizes, we care about large input sizes that how my algorithm is performe for large input sizes
//! 2) we are going to judge algorithym based on their rate of growth that, how fast the time is going to change  , with the very small change in input size

//? based on these two observations/terms - we introduce a new way of analyzing algorithym - called as "Asymptotic Analysis"
// Asymptotic Analysis - 1) rate of growth ,2) how algorithym is performing for large input size

// Asymptote -> it is a straight line that constantly opproches a given curve but doesn't meet at any infinite distance
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fmaths%2Fasymptote-formula%2F&psig=AOvVaw1bWfdSnigbSU3wzacDotrj&ust=1752051647435000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiPqZXzrI4DFQAAAAAdAAAAABAE

//* these are 2 major criteria for Asymptotic Analysis
// 1) rate of growth of algo (running time w.r.t. input size)
// 2) Behaviour of the rate at very large input size

//* whenever u want to represent the rate of growth in terms of the highest degree polynomial of the best case , we use 'Omega' for average case and 'Theta' for worst case 'O' Big 'O'

//!_____________________Big 'O' Notation _____________________

// this notation gives tight upper bound of the given function

//? O(1) -> constant time
//? O(log n) -> logarithmic time
//? O(n) -> linear time
//? O(n log n) -> n log n time
//? O(n^2) -> quadratic time
//? O(n^3) -> cubic time
//? O(2^n) -> exponential time

// i will write examples for all of them like from f1() to f8()

// _______________________________________________________

//! 1. O(1) - Constant Time

function f1(n) {
  return n % 2 === 0;
}
// Time Complexity: O(1)
//
// Detailed Explanation:
// 1. The function performs exactly one operation (modulus check)
// 2. Execution time remains identical whether n=1 or n=1,000,000
// 3. Characteristics:
//    - No loops or recursion
//    - Fixed number of operations
//    - Example operations:
//      * Array access (arr[0])
//      * Arithmetic operations (x + y)
//      * Comparison operations (x > y)
// 4. Why O(1)?
//    - '1' represents constant time, not literally one operation
//    - Could be 2-3 operations, still O(1)

//! 2. O(log n) - Logarithmic Time

function f2(n) {
  let count = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    count++;
  }
  return count;
}
// Time Complexity: O(log₂n) or simply O(log n)
//
// Detailed Explanation:
// 1. The loop divides 'n' by 2 until n ≤ 1
// 2. Mathematical derivation:
//    Start: n
//    1st iteration: n/2
//    2nd iteration: n/4
//    ...
//    k-th iteration: n/(2^k)
//    Loop stops when n/(2^k) ≤ 1 → k ≥ log₂n
// 3. Why log₂?
//    - Base 2 comes from halving (division by 2)
//    - Different bases convert via constant factors (logₐb = 1/log_b a)
// 4. Real-world examples:
//    - Binary search
//    - Balanced BST operations
// 5. Growth rate:
//    n=1,000 → ~10 iterations
//    n=1,000,000 → ~20 iterations

//! 3. O(n) - Linear Time

function f3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// Time Complexity: O(n)
//
// Detailed Explanation:
// 1. The loop runs exactly 'n' times
// 2. Operations-to-input ratio is 1:1
// 3. Characteristics:
//    - Single loop over input
//    - Processing each element once
// 4. Mathematical representation:
//    T(n) = c₀ + c₁·n
//    - c₀: constant setup time
//    - c₁: time per iteration
// 5. Examples:
//    - Finding max in array
//    - Linear search
// 6. Growth pattern:
//    n=100 → 100 ops
//    n=200 → 200 ops (exact doubling)

//! 4. O(n log n) - Linearithmic Time

function f4(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let j = i;
    while (j > 1) {
      j = Math.floor(j / 2);
      count++;
    }
  }
  return count;
}
// Time Complexity: O(n log n)
//
// Detailed Explanation:
// 1. Outer loop runs 'n' times (O(n))
// 2. Inner while runs log i times (O(log i))
// 3. Combined complexity:
//    Σ (from i=1 to n) log i ≈ n log n
// 4. Why not exact log n?
//    - Inner loop depends on changing 'i'
//    - Average case is (log 1 + log 2 + ... + log n)/n ≈ log n
// 5. Dominant term: n log n
// 6. Examples:
//    - Efficient sorting (MergeSort, HeapSort)
//    - Divide-and-conquer with linear combine
// 7. Growth comparison:
//    n=100 → ~664 ops
//    n=200 → ~1,529 ops (~2.3× increase)

//! 5. O(n²) - Quadratic Time

function f5(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}
// Time Complexity: O(n²)
//
// Detailed Explanation:
// 1. Nested loops each running 'n' times
// 2. Total operations: n × n = n²
// 3. Mathematical form:
//    T(n) = c·n² + d·n + e
//    - Dominant term: n²
// 4. Common patterns:
//    - Two nested loops
//    - Comparing all pairs
// 5. Examples:
//    - Bubble sort
//    - Matrix multiplication
// 6. Growth impact:
//    n=100 → 10,000 ops
//    n=200 → 40,000 ops (4× increase)

//! 6. O(n³) - Cubic Time

function f6(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        count++;
      }
    }
  }
  return count;
}
// Time Complexity: O(n³)
//
// Detailed Explanation:
// 1. Triple nested loops
// 2. Operations: n × n × n = n³
// 3. Geometric interpretation:
//    - Filling a 3D cube of side 'n'
// 4. Real-world cases:
//    - 3D matrix operations
//    - Brute-force algorithms
// 5. Growth severity:
//    n=10 → 1,000 ops
//    n=20 → 8,000 ops (8× increase)

//! 7. O(2ⁿ) - Exponential Time

function f7(n) {
  if (n <= 1) return n;
  return f7(n - 1) + f7(n - 2);
}
// Time Complexity: O(2ⁿ)
//
// Detailed Explanation:
// 1. Each call generates 2 new calls
// 2. Recursion tree depth: n
// 3. Total nodes: 2⁰ + 2¹ + ... + 2ⁿ ≈ 2ⁿ⁺¹
// 4. Why not exactly 2ⁿ?
//    - Some branches terminate early (n ≤ 1)
//    - Still O(2ⁿ) by dominance
// 5. Examples:
//    - Naive Fibonacci
//    - Subset generation
// 6. Growth danger:
//    n=20 → ~1 million ops
//    n=30 → ~1 billion ops

//! 8. O(n!) - Factorial Time

function f8(n) {
  if (n === 0) return 1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += f8(n - 1);
  }
  return count;
}
// Time Complexity: O(n!)
//
// Detailed Explanation:
// 1. Each call makes 'n' recursive calls
// 2. Recursion depth: n
// 3. Total operations: n × (n-1) × ... × 1 = n!
// 4. Mathematical proof:
//    T(n) = n·T(n-1)
//    T(0) = 1
//    → T(n) = n!
// 5. Real-world cases:
//    - Permutations
//    - Traveling Salesman brute-force
// 6. Growth catastrophe:
//    n=5 → 120 ops
//    n=10 → 3,628,800 ops
//! Complexity Hierarchy Visualization:
//* O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
// Each step represents dramatically faster growth. For n=100:
/* 
O(1): 1 operation

O(log n): ~7 ops

O(n): 100 ops

O(n²): 10,000 ops

O(2ⁿ): ~1.26e+30 ops

O(n!): ~9.33e+157 ops (more than atoms in universe)
 */

// ______________________________________________________
//! How to use leetcode constraints

//! 1. What Are Constraints?
// LeetCode gives you limits like:
//* 1 <= nums.length <= 1000
//* 1 <= n <= 10^6

// These tell you how big the input can be.
// Bigger input → Need a faster solution!

//! 2. How to Use Constraints to Pick the Right Solution
//? Cheat Sheet for Beginners
//* If Max Input Size (n) is...	 Allowed Time Complexity	 Example Algorithms	   Why?

//*   n ≤ 20	          O(2ⁿ) or O(n!)	      Brute-force, Backtracking	     Small input → Slow code works
//*   n ≤ 100	          O(n³)	                Nested loops (3 levels)	       100×100×100 = 1 million (OK)
//*   n ≤ 1,000	        O(n²)	                Two nested loops	             1,000×1,000 = 1 million (OK)
//*   n ≤ 100,000	      O(n log n)	          Sorting, Fast Search	         100,000 × log(100,000) ≈ 1.6M (OK)
//*   n ≤ 1,000,000	    O(n)	                Single loop	                   1M operations(Fast!)
//*   n > 1,000,000	    O(log n) or O(1)    	Binary Search,                 Math Tricks	Must avoid loops!

//! 3. Real-Life Examples (Like Solving a Puzzle)
//* Example 1: Sum of Two Numbers
// Problem: Find two numbers in an array that add up to target.

//? Constraint: 2 <= nums.length <= 10^4

// What Should You Do?

// If n ≤ 100 → Use nested loops (O(n²)) → Easy but slow for big n.

// If n ≤ 10,000 → Use a hashmap (O(n)) → Fast even for big n.

//* ✅ Best Choice: Hashmap (because n can be 10,000).

//* Example 2: Find Maximum in an Array
//? Constraint: 1 <= nums.length <= 10^5

//What Should You Do?

// O(n) solution: Loop once, keep track of max.

// ❌ O(n²) solution: Compare every number with every other → Too slow!

// ✅ Best Choice: Single loop (O(n)).

//! 4. Simple Rules to Remember
//* 1. Small Input (n ≤ 100) → Brute-force (nested loops) is OK.
//* 2. Medium Input (n ≤ 10,000) → Avoid O(n³), use O(n²) or better.
//* 3. Big Input (n > 100,000) → Must use O(n) or O(log n).
//* 4. Huge Input (n = 1,000,000+) → Only O(1) or O(log n) works.

//! 5. What Happens If You Pick the Wrong Complexity?
// LeetCode will give "Time Limit Exceeded" (TLE).
// Your code is too slow for big inputs!

// Example:

// If n = 100,000 and you use O(n²) → 100,000 × 100,000 = 10 billion operations! (Too slow!)
// Instead, use O(n) → 100,000 operations (Fast ✅).

//!6. Final Tip: Think Before Coding!
// Read constraints first.
// Ask: "How big can n be?"
// Pick the fastest possible method.

// ✅ Good: O(n) → Single loop
// ❌ Bad: O(n²) → Nested loops (unless n is small)

//! Summary (For Kids & Beginners!)
//* Input Size	              Safe Complexity	                 How?

//*  Tiny (n ≤ 20)	            O(n!) or O(2ⁿ)	          Try all possibilities
//*  Small (n ≤ 100)	          O(n³)	                    3 nested loops
//*  Medium (n ≤ 1,000)	        O(n²)	                    2 nested loops
//*  Big (n ≤ 100,000)	        O(n log n)	              Sorting + Fast Search
//*  Huge (n ≤ 1,000,000)	      O(n)	                    Single loop
//*  Gigantic (n > 1M)	        O(log n) or O(1)	        Binary Search / Math

// Now you can predict if your code will pass before even running it! 🚀

//!Remember:
//* 🔹 Small n → Slow code OK
//* 🔹 Big n → Need FAST code!
//* 🔹 Check constraints FIRST!
