// ===========================================================================
// MARK: VALID PARENTHESES
// Question #10: Valid Parentheses (Easy)
// Q: Given a string containing only parentheses, determine if it is valid. The string is valid if all
//    parentheses close.
// Example: {([])}
// Step 1: Verify Constraints
// - Does an empty string count as valid? Yes, return true

// Step 2: Writing Test Cases
/*
  ""     - true 
  {([])} - true 
  {([]   - false 
  {[(])} - false 
  {[]}() - true

  ------------>
  "{[]()}"
  <-----------
  only at the end we determine if the parentheses is valid 
*/
// ===========================================================================
const isValidParentheses = (str) => {
  console.log(`Testing: ${str}`);
  if (str.length === 0) return true;

  const stack = []; // Space: O(n)

  const parensMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    // Time: O(n)
    const stemp: string = str[i];
    if (parensMap[stemp]) {
      stack.push(stemp);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parensMap[leftBracket];
      if (stemp !== correctBracket) return false;
    }
  }

  return stack.length === 0;
};

// Time Complexity:
// ---------------
// time: O(n)
// space: o(n)

// ===========================================================================

class StackAndQueuesTesting {
  static testIsValidParenthesis() {
    const results = [];
    const tests: string[] = ['', '{}', '{([]'];

    tests.forEach((s) => {
      results.push(isValidParentheses(s));
    });

    return results;
  }
}

export default StackAndQueuesTesting;
