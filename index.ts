// Import stylesheets
import './style.css';

import { Strings1, Strings1BruteForce } from './String Questions';
import { ListNode, reverseLinkedList } from './Linked List Questions';

import StackAndQueuesTesting from './Stacks and Queues Questions';
import SortingAlgorithmsUtil from './Sorting Algorithms';
import { SortType } from './Data Types';
import RecursionTesting from './Problems Involving Recursion Questions';
import ArrayBasedQuestions from './Problems Involving Array Questions';

// MARK: Global Variables
// -------------------------------------
let res: any = 'Run';

// MARK: Arrays
// --------------
// Two Sum:  Given an array of integers, return the indices of the two numbers that add up to a given target.

// Step 1: Verify the constraints
// Ask Questions.
// ------------
// Q: Are all the numbers positive or can there be negatives? Can be all numbers are positive
// Q: Are there duplicate numbers in the array.
// Q: Will there always be a solution available?
// A: No, there may not always be a solution.
// Q: Can there be multiple pairs that add up to the target?
// A: No, only 1 pair of numbers will add up to the target?

// Step 2: Write out some test cases
// --------
// Best Test Case: [1, 3, 7, 9, 2]. T = 11  indices = [3, 4]

// Edge Cases

// [1, 3, 7, 9, 2] T = 25 not found null no possible solution.
// [] return null empty case
// [5] t = 5 it is still null because we need a pair.
// [1, 6] t = 7 low hanging fruit where it is immediately with a solution

// Step 3: Figure out a solution without code.
// --------
//         0. 1. 2. 3. 4
// nums = [1, 3, 7, 9, 2]. t = 11
//        P1  P2                         create a pointers
// P1 = number we are tesiting.
// P2 = number we compare to
// numberToFind = target - nums[p1]      => [p1, p2] => [3, 4]

// Step 4: Write out or solution in code.

let nums: number[] = [1, 3, 7, 9, 2];
const target: number = 11;

const findTwoSumBruteForce = (nums, target): number[] => {
  let p1, p2, numberToFind: number;

  for (p1 = 0; p1 < nums.length; p1++) {
    // N
    numberToFind = target - nums[p1];

    for (p2 = p1 + 1; p2 < nums.length; p2++) {
      // N
      if (nums[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  } // O(n * n) = O(n^2) worst case
  return null;
};

// Step 7: Analyzing Space and Time Complexity
// -------
// T: O(N^2)
// S: O(1)

// Step 8: Optimizing Our Solution
// -------
// Utilizing a data structure.
// 1. calculate ntf
// 2. nums[p2] === ntf

// Step 9:
const findTwoSumOptimized = (nums, target): number[] => {
  let p1: number;

  let map = new Map<number, number>();

  for (p1 = 0; p1 < nums.length; p1++) {
    // N
    let currentMapVal = map[nums[p1]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p1];
    } else {
      map[target - nums[p1]] = p1;
      console.log(map);
    }
  }
  return null;
};

// hash map
// {10: 0, 8: 1, 4: 2, 2: 3}

// Test Cases
// --------------------------------------------------------------------
// p1 = 0  ntf = 10 inner loop p2 = 1, 2, 3, 4, 5 walk through the loop.

// --------------------------------------------------------------------
// res = findTwoSumOptimized(nums, target);

// res = Strings1('ab#z', 'az#z');
// res = Strings1('x#y#z#', 'a#');
// res = Strings1BruteForce('ab#z', 'az#z');

// let head: ListNode = new ListNode(0);
// head.next = new ListNode(1);
// head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(3);

// reverseLinkedList(head);

(() => {
  console.log('Hello World');
  let res: any = [];

  // res = StackAndQueuesTesting.testIsValidParenthesis();

  // Sorting Algorithms
  // --------------------------
  // res = SortingAlgorithmsUtil.test(SortType.Selection);
  // res = RecursionTesting.test();

  res = ArrayBasedQuestions.test();

  // Print Out
  console.log(res);

  // Update UI on the DOM
  let tag = document.createElement('h1');
  tag.innerHTML = `Result = [${res}]`;
  document.getElementById('app').appendChild(tag);
})();

// Global Space
