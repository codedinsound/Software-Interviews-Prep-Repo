/*

Normal Recursion Space: O(N) 

Tail Recursion Space: O(1) 

Example: 4! - 4 * 3 * 2 * 1
*/

// ===========================================================================
// Normal Recursive Space: O(N)
function regularFactorial(x) {
  // base case
  if (x <= 1) return 1;
  else return x * regularFactorial(x - 1);
}

// regularFactorial(4)
// 4 * regularFactorial(3);
// 4 * (3 * regularFactorial(2));
// 4 * (3 * (1 * regularFactorial(1)));
// 4 * (3 * (2 * 1));

// Tail Recursive Space: O(1)
const tailRecursionFactorial = (x, totalSoFar = 1) => {
  // base case
  if (x === 0) return totalSoFar;
  else return tailRecursionFactorial(x - 1, totalSoFar * x);
};

// tailRecursionFactorial(4)
// tailRecursionFactorial(4, 1)
// tailRecursionFactorial(3, 4)
// tailRecursionFactorial(2, 12)
// tailRecursionFactorial(1, 24)
// tailRecursionFactorial(0, 24)

// ===========================================================================
// MARK: Kth Largest Element
// Question #13: Kth Largest Element
// Q: Given an unsorted array, return the kth largest element. It is the kth largest element in sorted order,
//    not the kth distinct element
// --------------------------------------------------

// ===========================================================================

class RecursionTesting {}

export default RecursionTesting;
