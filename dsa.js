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
//! Given Function  by Sanket Singh

//! 1. O(n) - Simple Linear Loop
javascript;
function f0(n) {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    // *Loop runs exactly n times*
    console.log(i); // O(1) per iteration
    ans += i; // O(1) per iteration
  }
  return ans; // O(1)
}
//* Total Time = n * (O(1) + O(1)) + O(1) = O(n)
//
// How we solve it:
// 1. Identify the loop structure: `for(i=0; i<n; i++)`
// 2. Loop executes exactly `n` times (i from 0 to n-1)
// 3. Each iteration has:
//    - One console.log (O(1))
//    - One addition (O(1))
// 4. Constant operations outside loop (O(1))
//? Key Insight:
//   - Total operations scale linearly with `n` → O(n)
//   - Example: n=100 → 100 iterations

//! 2. O(n + m) - Two Independent Loops
javascript;
function f1(n, m) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *First loop: O(n)*
    ans += 1; // O(1)
  }
  for (let j = 0; j < m; j++) {
    // *Second loop: O(m)*
    ans += 2; // O(1)
  }
  console.log(ans); // O(1)
}
//* Total Time = O(n) + O(m) = O(n + m)
//
// How we solve it:
// 1. First loop runs `n` times → O(n)
// 2. Second loop runs `m` times → O(m)
// 3. These are **independent** (no nesting)
//? Key Insight:
//   - We cannot simplify O(n + m) further because:
//     - `n` and `m` are separate input sizes
//     - If m ≈ n, it becomes O(2n) → Still O(n)
//   - Example: n=100, m=50 → 150 total iterations

//! 3. O(log n) - Logarithmic Loop
javascript;
function f2(n) {
  let ans = 9;
  for (let i = 1; i <= Math.log(n); i++) {
    // *Loop runs log(n) times*
    console.log(i); // O(1)
  }
  return 0; // O(1)
}
//* Total Time = log(n) * O(1) = O(log n)
//
// How we solve it:
// 1. Loop condition: `i <= Math.log(n)`
//    - Math.log() is natural log (base e)
//    - In Big-O, log bases don't matter (convertible via constants)
// 2. Iterations ≈ log₂n (for intuition)
//? Key Insight:
//   - Loop count grows logarithmically with input:
//     - n=100 → ~4.6 iterations
//     - n=10,000 → ~9.2 iterations
//   - Example: Binary search uses this pattern

//! 4. O(n²) - Classic Nested Loop
javascript;
function f3(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < n; j++) {
      // *Inner loop: O(n)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
//* Total Time = O(n) * O(n) = O(n²)
//
// How we solve it:
// 1. Outer loop runs `n` times
// 2. For **each** outer iteration, inner loop runs `n` times
//? Key Insight:
//   - Total iterations = n * n = n²
//   - Example: n=10 → 100 iterations
//   - Real-world case: Bubble Sort

//! 5. O(n²) - Triangular Nested Loop
javascript;
function f4(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < i; j++) {
      // *Inner loop: O(i)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
//* Total Time = Σ(i=0 to n-1) O(i) = O(n²)
//
// How we solve it:
// 1. Outer loop: `n` iterations
// 2. Inner loop runs `i` times (0, 1, 2, ..., n-1)
//    - Total iterations = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2
//? Key Insight:
//   - Still O(n²) because n²/2 - n/2 → Dominant term is n²
//   - Example: n=10 → 45 iterations (close to n²=100)

//! 6. O(n log n) - Nested with Log
javascript;
function f5(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = 0; j < Math.log(n); j++) {
      // *Inner loop: O(log n)*
      ans += 1; // O(1)
    }
  }
  return ans; // O(1)
}
//* Total Time = O(n) * O(log n) = O(n log n)
//
// How we solve it:
// 1. Outer loop: `n` iterations
// 2. Inner loop: `log(n)` iterations per outer loop
//? Key Insight:
//   - Common in efficient algorithms like Merge Sort
//   - Example: n=100 → ~460 ops (100 * 4.6)

//! 7. O(n + n²) → O(n²) - Mixed Complexity
javascript;
function f6(n) {
  let ans = 0;
  // Part 1: O(n)
  for (let i = 0; i < n; i++) {
    // O(n)
    ans += i; // O(1)
  }
  // Part 2: O(n²)
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      // O(n)
      ans += i + j; // O(1)
    }
  }
  console.log(ans); // O(1)
}
//* Total Time = O(n) + O(n²) → O(n²) (Dominant term)
//
// How we solve it:
// 1. First loop: O(n)
// 2. Nested loops: O(n²)
//? Key Insight:
//   - Big-O keeps only the **dominant term**
//   - For large `n`, n² dwarfs n
//   - Example: n=100 → 100 + 10,000 = 10,100 → Still O(n²)

//! 8. O(n²) - Reverse Counting Nested Loop
javascript;
function f7(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    // *Outer loop: O(n)*
    for (let j = n; j > 1; j--) {
      // *Inner loop: O(n)*
      ans += i; // O(1)
    }
  }
  return ans; // O(1)
}
//* Total Time = O(n) * O(n) = O(n²)
//
// How we solve it:
// 1. Outer loop: `n-1` iterations
// 2. Inner loop: `n-1` iterations (counts down from n)
//? Key Insight:
//   - Direction (counting up/down) doesn't affect complexity
//   - Same as f3() but with reverse inner loop

//! 9. O(log n) - Exponential Growth Loop
javascript;
function f8(n) {
  let ans = 0;
  for (let i = 1; i < n; i *= 2) {
    // *i doubles each iteration*
    ans += i; // O(1)
  }
  return ans; // O(1)
}
//* Total Time = O(log n)
//
// How we solve it:
// 1. Loop counter grows exponentially: i=1, 2, 4, 8,...
// 2. Iterations ≈ log₂n (how many doublings reach n)
//? Key Insight:
//   - Example: n=32 → i=1,2,4,8,16 → 5 iterations (log₂32=5)

//! 10. O(n) - Geometric Series Loop (Tricky!)
javascript;
function f10(n) {
  for (let i = n; i > 0; i /= 2) {
    // *Outer loop: O(log n)*
    for (j = 0; j < i; j++) {
      // *Inner loop: O(i)*
      console.log(i, j); // O(1)
    }
  }
}
//* Total Time = O(n) (Not O(n log n)!)
//
// How we solve it:
// 1. Outer loop: log n iterations (halving `i`)
// 2. Inner loop: runs `i` times (n, n/2, n/4,...)
// 3. Total operations = n + n/2 + n/4 + ... ≈ 2n
//? Key Insight:
//   - Forms a geometric series converging to 2n → O(n)
//   - Counterintuitive but mathematically correct

//! 11. O(n log n) - Harmonic Series Loop
javascript;
function f11(n) {
  for (let j = 1; j <= n; j++) {
    // *Outer loop: O(n)*
    for (let i = 0; i < n; i += j) {
      // *Inner loop: O(n/j)*
      console.log(i, j); // O(1)
    }
  }
}
//* Total Time = O(n log n)
//
// How we solve it:
// 1. Outer loop: `n` iterations
// 2. Inner loop: runs `n/j` times per outer iteration
// 3. Total operations = n(1 + 1/2 + 1/3 + ... + 1/n) ≈ n log n
//? Key Insight:
//   - Harmonic series sum ≈ log n
//   - Example: n=10 → 10*(1+0.5+0.33+...) ≈ 29 → Close to 10 log 10≈23

//! 12. O(log log n) - Rare Double Log
javascript;
function f12(n) {
  let ans = 0;
  for (let i = 2; i <= n; i *= i) {
    // *i squares each iteration*
    ans++; // O(1)
  }
  return ans; // O(1)
}
//* Total Time = O(log log n)
//
// How we solve it:
// 1. Loop counter grows super-exponentially: i=2, 4, 16, 256,...
// 2. Iterations ≈ log₂(log₂n) (how many squarings reach n)
//? Key Insight:
//   - Extremely fast convergence
//   - Example: n=65,536 → i=2,4,16,256 → 4 iterations (log₂(log₂65536)=4)

//! Summary of Key Patterns:
//* -->Single Loop → O(n)
//* --> Nested Loops → Multiply complexities (O(n²) or O(n log n))
//* --> Halving/Doubling → O(log n)
//* --> Geometric Series → Often O(n) despite nested loops
//* --> Independent Operations → Add complexities (O(n + m))
//* --> Dominant Term → Always keep the highest-order term in Big-O

// Each analysis follows the same method:
//? 1. Identify loop structure → 2. Count iterations → 3. Calculate total operations → 4. Simplify using Big-O rules

// _______________________________________________________
//! using Function of Myself

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

// ______________________________________________________________

//! 🚀 Instant Time Complexity Trick (Look & Tell in Seconds!)
//* Want to guess time complexity just by looking at code? Use this cheat sheet for interviews & LeetCode!

//! 🔎 Step 1: Look for Loops & Recursion
// Count how the code repeats operations based on input size (n).

//*    Code Pattern	              Time Complexity	                    Why?

//*     No loops, just math	        O(1)	                        Runs in fixed time
//*     Single loop	                O(n)	                        Runs n times
//*     Two nested loops	          O(n²)	                        n × n operations
//*     Three nested loops	        O(n³)	                        n × n × n operations
//*     Loop halves input	          O(log n)	                    Problem size reduces by 2 each step
//*     Recursion (two calls)	      O(2ⁿ)	                        Each call branches twice
//*     Recursion (n calls)	        O(n!)	                        Each call branches n times

//! ⚡ Step 2: Fast Examples (Look & Answer)
//*  Example 1 (O(n))

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    // Single loop → O(n)
    sum += num;
  }
  return sum;
}
// ✅ Answer: O(n) (Loop runs once per element)

//* Example 2 (O(n²))

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Outer loop → O(n)
    for (let j = 0; j < arr.length; j++) {
      // Inner loop → O(n)
      console.log(arr[i], arr[j]); // Total → O(n × n) = O(n²)
    }
  }
}
// ✅ Answer: O(n²) (Two nested loops)

//* Example 3 (O(log n))

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    // Loop halves input → O(log n)
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// ✅ Answer: O(log n) (Array splits in half each time)

//* Example 4 (O(2ⁿ))

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // Two recursive calls → O(2ⁿ)
}
// ✅ Answer: O(2ⁿ) (Each call branches twice)

//* Example 5 (O(n!))

function permute(nums) {
  if (nums.length <= 1) return [nums];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    for (let p of permute(rest)) {
      // Recursive branching → O(n!)
      result.push([nums[i], ...p]);
    }
  }
  return result;
}
// ✅ Answer: O(n!) (Generates all permutations → Extremely slow!)

//! 🎯 Step 3: Quick Trick for Interviews
//? 1. Count loops:
// a. loop → O(n)
// b. nested loops → O(n²)
// c. nested loops → O(n³)

//? 2. If input halves → O(log n)
//? 3. If recursion with 2+ calls → O(2ⁿ) or worse
//? 4. If generating all combinations → O(n!)

//! 📌 Final Cheat Sheet (For Instant Answers)

//*         Code Looks Like	              Time Complexity

//*            No loops,                   direct math	O(1)
//*            Single loop	               O(n)
//*            Two nested loops	           O(n²)
//*            Three nested loops	         O(n³)
//*            Loop with n = n / 2	       O(log n)
//*            Recursion (two branches)    O(2ⁿ)
//*            Recursion (n branches)	     O(n!)

//! 💡 Pro Tip for LeetCode
//?  -->  If n ≤ 100 → O(n³) is OK
//?  -->  If n ≤ 10,000 → O(n²) is OK
//?  -->  If n ≤ 100,000 → Must use O(n) or O(n log n)
//?  -->  If n > 1,000,000 → Only O(log n) or O(1) works

// Now you can look at any code and guess complexity in seconds! 🚀

// Practice: Try analyzing random LeetCode problems just by reading the code!
// ______________________________________________________

//! Recursive Code Complexity Analysis
//* Space complexity of Recursive code will involve the data structures dependent on the value of input that you make inside the function + the call stack that you have made.
//* so even if u dont create any data structure in function, recursive codes are always going to take up space in memory because call stack will always take up space in memory.

//! 1. Factorial - Linear Recursion O(n)
javascript;
function f0(n) {
  if (n == 1) return 1; // Base case: O(1)
  return n * f0(n - 1); // Recursive call: f0(n-1)
}
//* Time Complexity: O(n)
//
// How we solve it:
// 1. Recurrence Relation: T(n) = T(n-1) + O(1)
// 2. Unfolding the recursion:
// - T(n) = T(n-1) + 1
// - T(n-1) = T(n-2) + 1 → T(n) = T(n-2) + 2
// - ...
// - T(n) = T(1) + (n-1) = 1 + n - 1 = n
//? Key Insight:
// - Single recursive call per step → Linear recursion
// - Example: f0(5) → 5 → 4 → 3 → 2 → 1 (5 calls total)

//! 2. Fibonacci - Exponential Recursion O(2ⁿ)
javascript;
function f1(n) {
  if (n == 1 || n == 0) return n; // Base case: O(1)
  return f1(n - 1) + f1(n - 2); // Two recursive calls
}
//* Time Complexity: O(2ⁿ)
//
// How we solve it:
// 1. Recurrence Relation: T(n) = T(n-1) + T(n-2) + O(1)
// 2. Recursion Tree Analysis:
// - Each call branches into 2 new calls (n-1 and n-2)
// - Tree depth ≈ n → Total nodes ≈ 2ⁿ
//? Key Insight:
// - Exponential growth due to dual branching
// - Example: f1(5) → 15 total calls (≈2⁵=32 is upper bound)
// - Optimization: Memoization reduces this to O(n)

//! 3. Linear Recursion + Loop O(n²)
javascript;
function f2(n) {
  if (n == 0) return; // Base case: O(1)
  for (let i = 1; i <= n; i++) {
    // Loop: O(n)
    // some O(1) operation
  }
  f2(n - 1); // Recursive call
}
//* Time Complexity: O(n²)
//
// How we solve it:
// 1. Recurrence Relation: T(n) = T(n-1) + O(n)
// 2. Unfolding the recursion:
// - T(n) = T(n-1) + n
// - T(n-1) = T(n-2) + (n-1) → T(n) = T(n-2) + n + (n-1)
// - ...
// - T(n) = 1 + 2 + ... + n = n(n+1)/2 → O(n²)
//? Key Insight:
// - Triangular number pattern (like nested loops)
// - Example: f2(5) → 5 + 4 + 3 + 2 + 1 = 15 operations

//! 4. Recursion with Fixed-Length Loop O(kn)
javascript;
function f3(arr, n) {
  if (n == 0) return; // Base case: O(1)
  for (let i = 1; i <= arr.length; i++) {
    // Loop: O(k)
    // some O(1) operation
  }
  f3(arr, n - 1); // Recursive call
}
//* Time Complexity: O(kn) where k = arr.length
//
// How we solve it:
// 1. Recurrence Relation: T(n) = T(n-1) + O(k)
// 2. Unfolding the recursion:
// - T(n) = T(n-1) + k
// - T(n-1) = T(n-2) + k → T(n) = T(n-2) + 2k
// - ...
// - T(n) = n * k → O(kn)
//? Key Insight:
// - Linear in both n and k (k is constant per recursion level)
// - Example: k=3, n=5 → 3*5=15 operations

//! 5. Double Recursive Call O(2ⁿ)
javascript;
function f4(n) {
  if (n <= 1) return 1; // Base case: O(1)
  return f4(n - 1) + f4(n - 1); // Two identical recursive calls
}
//* Time Complexity: O(2ⁿ)
//
// How we solve it:
// 1. Recurrence Relation: T(n) = 2T(n-1) + O(1)
// 2. Recursion Tree Analysis:
// - Each call branches into 2 new calls
// - Tree depth = n → Total nodes = 2ⁿ - 1
//? Key Insight:
// - Binary tree structure → Exponential growth
// - Example: f4(3) → 7 total calls (2³ - 1 = 7)

//! 6. Triple Recursive Call O(3ⁿ)
javascript;
function f5(n) {
  if (n <= 1) return 1; // Base case: O(1)
  return f5(n - 1) + f5(n - 2) + f5(n - 3); // Three recursive calls
}
//* Time Complexity: O(3ⁿ)
//
// How we solve it:
// 1. Recurrence Relation: T(n) = T(n-1) + T(n-2) + T(n-3) + O(1)
// 2. Approximation:
// - Upper bound: Each call branches into 3 new calls
// - Lower bound: Ω(φⁿ) where φ ≈ 1.839 (Tribonacci constant)
// - Conservative Big-O: O(3ⁿ)
//? Key Insight:
// - Exponential with larger base than Fibonacci
// - Example: f5(4) → 13 total calls (grows faster than Fibonacci)

//! Summary of Recursive Complexity Analysis
//* Function	          Pattern	Time                    Complexity
//* f0	                  Linear recursion	              O(n)
//* f1	                  Dual branching (Fibonacci)	    O(2ⁿ)
//* f2	                  Recursion + Loop	              O(n²)
//* f3	                  Recursion + Fixed Loop	        O(kn)
//* f4	                  Double recursion	              O(2ⁿ)
//* f5	                  Triple recursion	              O(3ⁿ)

//! Key Techniques:

//? Recurrence Relations: Write the equation for T(n)
//? Recursion Tree: Visualize call branches and count nodes
//? Master Theorem: Applies to divide-and-conquer cases (not shown here)
//? Memoization: Can optimize exponential cases to O(n) (e.g., Fibonacci)

// ________________________________________________________________
//! Amortized Analysis

//? Amortized analysis is a technique to analyze algorithms and It provides a more accurate estimate of the total cost of an algorithm in a way that takes into account the cost of memory allocation and deallocation.
//? Amortized analysis is used to analyze algorithms that use dynamic memory allocation, such as arrays or linked lists.

//* it referes to determining the time-averag running time for a sequence of operations

//! Diffrence Between Asymptotic Complexity Analysis and Amortized Complexity Analysis
//? it is diffrent from average asymptotic analysis , because here we do not make any assumption about data values whereas in the asymptotic analysis , we assumes an overall average performance.

//* Amortized Analysis is good for those situations where an algorithms performs some good operations and some bad operations, and the bad operations are rare, and the good operations are common.
//* Amortized Analysis is also good for those situations where the cost of the algorithm is related to the size of the input data.

//! Defination - Amortized analysis is a good way for analysing complexity for those algorithm , which perform very good in most of the cases but extremely bad in some of the cases
// ________________________________________________________________

//? Arrays are handled algorhmically for demonstrating dynamic nature
// so my question is
//! we have access to fixed size arrays and , we have to create dynamic arrays out of it.

//* Ans - like we created an array of size 5 - [0,1,2,3,4]
// and we do push(16) , it will add 16 at the last but my array does not have enough space to store 16 because it has fixed size 5 .
// so what we do to add new element .... the worst case is to create new array of size 6 and copy all the elements from the old array to the new array by one by one [0, 1, 2, 3, 4, 16]
// so, algorithm says everytime increase the size of the array by 1

//? so we can say every push operation at the end of array will take order of 'n' time --> O(n) time
// it is not very efficient algorithm so we use some other algorithm
// what we can - instead of increasing the length of array by 1 unit, how about we double it ??
// ________________________________________________________________

//! Principal of Mathematical Induction [PMI]
//? 3 rules for PMI

//* 1. Base Case
//* 2. Asumption
//* 3. self work

//? 1. Base Case - it is the smallest input value for which we already know the answer
//? 2. Asumption - let's assume that formulla work correctly for one smaller input value
//? 3. self work - using the fact that formulla works for n==k, and we will try to prove it will work for n==k+1 also.

// ________________________________________________________________
//! _______________________Recursion_______________________________

//? Recursion is a technique to solve a problem by breaking it down into smaller sub-problems and solving each sub-problem recursively.
// every recursion problem take 3 steps to solve

//* 1. Base Case -  it is the smallest possible input value for which we already know the answer
//* 2. Asumption -  you might assume that some task is going to be done already for you
//* 3. self work -  based on that task that has been already done for you , you will try to do another task

