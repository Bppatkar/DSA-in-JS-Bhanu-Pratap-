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
