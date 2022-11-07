// ===========================================================================
// MARK: VALID PARENTHESES
// Question #10: (EASY)
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
// MARK: MINIMUM BRACKETS TO REMOVE
// Question #10: (MEDIUM)
// Q: Given a string only containing round backets '(' and ')' and lowercase characters,
//    remove the least amount of brackets so the string is valid.

//    A string is considered valid if it is empty or if there are brackets, they all close.
/*
Example: "a)bc(d)" -> abc(d) is valid 
         "(ab(c)a" -> (abc)a is valid 
         "))((" -> ""

Step 1: Ask Questions 
What do we return from our algorithm? Return a valid string with the fewest brackets removed.

Will there be spaces in the string - no, the string only contains characters 

Is a string ocntaining only lowercase characters valid. Yes, you don't need any brackets for astring to be valid. 

Step 2: Edge Cases 
---------
"a)bc(d)" -> "abc(d)"


"(ab(c)d" -----> "ab(c)d"
          \
            \
              > "(abc)d"

"))((" -> "" 

Step 3: Devise our Solution 
---------
<----------
"a)bc(d)"
----------> 

"a)bc(d)".split("") -----------> [a, ), b, c, (, d, )]
*/
// ===========================================================================

const minRemoveToMakeValid = (str) => {
  const res = str.split('');
  const stack: number[] = [];

  console.log(res);
  for (let i = 0; i < res.length; i++) {
    console.log(i, stack);
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    const cwIndex = stack.pop();
    res[cwIndex] = '';
  }

  return res.join('');
};

// Time Complexity
// --------
// Time: O(n)
// Space: O(n)

// ===========================================================================
// MARK: Queue With Stacks
// Question #12: (Easy)
// Q: Implement the class Queue using stacks. The queue methods you need to implement are
//    enqueue, dequeue, peek and empty
/*
  enqueue: append a value to the end of the queue. 
  dequeue: remove and the value at the start of the queue. 
  peek: return the value at the start of the queue. 
  empty: return a boolean value of whether the queue is empty or not. 

  Step 1: Ask Quetions 
  Do the queue methods we have to implement need to perform at the same complexity of a real queue? 

  Do the queue methods we have to implement need to perform at the same complexity of a real queue?
      - No, but they should be as performant as possible. 

  Step 2: Write out some test cases 
      - 

  Step 3: Figure out a solution without code 

    queue: [     3, 4, 5  ]
                / \
              1    2
    stack: [ 1, 2, 3, ,  ]
                    /  \
                   4    5
    stack2: [5, 4, 3, 2, 1]
*/
// ===========================================================================
class QueueWithStacks<T> {
  in: T[];
  out: T[];
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val: T): void {
    this.in.push(val);
  }

  dequeue(): T {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

// ===========================================================================
// MARK: Stack Testing Class
class StackAndQueuesTesting {
  static testIsValidParenthesis() {
    const results = [];
    const tests: string[] = ['', '{}', '{([]'];

    tests.forEach((s) => {
      results.push(isValidParentheses(s));
    });

    return results;
  }

  static testMinRemoveToMakeValid() {
    const results: any[] = [];
    const tests: string[] = ['a)bc(d)', '(ab(c)d'];

    tests.forEach((s) => {
      results.push(minRemoveToMakeValid(s));
    });

    return results;
  }

  static testQueuesWithStacks() {
    console.log('Testing Queues With Stacks');
    const results = [];
    const tests: number[] = [];
    const queue: QueueWithStacks<number> = new QueueWithStacks<number>();

    tests.forEach((number) => {
      queue.enqueue(number);
    });
    console.log(queue);

    results.push(queue.dequeue());

    return results;
  }
}

export default StackAndQueuesTesting;
