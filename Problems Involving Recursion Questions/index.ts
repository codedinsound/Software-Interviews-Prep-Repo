import SortingAlgorithmsUtil from '../Sorting Algorithms';
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
/*
  Step 1: Can we get an array where k is larger than the array length? 
          no, assume an aswer is always available


  Step 2: Writing Test Cases 

  [5,3,1,6,4,2]   k=2 -> [1,2,3,4,[5],6]
  [2,3,1,2,4,2]   k=4 -> [1,2,[2],2,3,4]
  [3] k=1 -> 3 

  Divide and Conquer
  1. Multi-Branched Recursion.

  2. Breaks a problem into multiple smaller but same sub-problems. 

                    [2, 4, 1, 3, 5, 8, 9, 6, 7]
                      /               \
                    /                   \
                  /                       \
          [2, 4, 1, 3]                [8, 9, 6, 7]
            /  \                          /   \
          /     \                        /      \
        /        \                      /        \ 
    [2, 1]        [4]                [6]          [8, 9]


  3. Combines the solutions of sub-problems into the solution for the original problem. 
*/
const getKthLargestElementUsingNativeSolution = (kth, array) => {
  if (array.length === 0) return -1;

  array.sort((a, b) => a - b);

  return array[array.length - kth];
};

const getKthLargestElementUsingRecursion = (array, k) => {
  const indexToFind = array.length - k;

  SortingAlgorithmsUtil.quickSort(array, 0, array.length - 1);

  return array[indexToFind];
};

// ------------
// Time: O(n * log(n))
// Space: O(log(n));

// ===========================================================================
// MARK: Kth Smallest (Hoare's Quick Select Algorithm)
// Q: Find kth smallest element in unordered list
// --------------------------------------------------
/*

*/
const getKthSmallestUsingRecursion = (array, k) => {
  const indexToFind = array.length - k;

  SortingAlgorithmsUtil.quickSelect(array, 0, array.length - 1, indexToFind);

  return array[indexToFind];
};

// ===========================================================================

class RecursionTesting {
  static test(): any {
    const array: number[] = [2, 4, 1, 3, 5, 8, 9, 6, 7];

    // Get Kth Largest Element
    let res = getKthLargestElementUsingRecursion(array, 3);

    // Get Kth Smallest Element
    res = getKthSmallestUsingRecursion(array, 2);

    console.log(array);

    return res;
  }
}

export default RecursionTesting;
