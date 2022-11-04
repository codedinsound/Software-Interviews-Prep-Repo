// Q: Given two strings S and T, return if they equal when both are typed out.
//    Any '#' that appears in the string counts as a backspace.

// Example:     S: "ab#c"        T: "az#c"
//                  "ac"              "ac"      do they equal?

// Step 1: Verify the constraints
// - What happes when two #'s appear beside each other? ab## -> ""
// - What happens when two # when there is no character to move? deletes nothing
// - Are two empty strings equal to each other? Yes S: 'x#y#z#' T: 'a#' true
// - Does case sensititivity matter? Yes a does not equal A

// Step 2: Write out some test cases

// S: "ab#z"   T: "az#z"  True
// S: "abc#d"  T: "acc#c" False
// S: "x#y#z#" T: "a#"    True
// S: "a###b"  T: "b"     True
// S: "Ab#z"   T: "ab#z"  False

function Strings1(s: string, t: string): boolean {
  let len1, len2: number;
  let newStr1, newStr2: string;

  newStr1 = newStr2 = '';
  len1 = s.length - 1;
  len2 = t.length - 1;

  for (let i = len1; i >= 0; i--) {
    if (s[i] !== '#') {
      newStr1 = s[i] + newStr1;
    } else {
      i--;
    }
  }

  for (let i = len2; i >= 0; i--) {
    if (t[i] !== '#') {
      newStr2 = t[i] + newStr2;
    } else {
      i--;
    }
  }

  return newStr1 === newStr2;
}

// Step 4: Space and Time Complexity
function BuildString(s: string) {
  const builtArray = [];

  for (
    let p = 0;
    p < s.length;
    p++ // O(n)
  )
    if (s[p] !== '#') builtArray.push(s[p]);
    else builtArray.pop();

  return builtArray;
}

function Strings1BruteForce(s: string, t: string) {
  let builtA = BuildString(s); // O(a)
  let builtB = BuildString(t); // O(b)

  console.log(s, t, builtA, builtB);

  if (builtA.length !== builtB.length) return false;

  for (let i = 0; i < builtA.length; i++)
    if (builtA[i] !== builtB[i]) return false; // O(a) or O(b)

  return true; // O(a + a) + O(b) = O(2a + b) = O(a + b)
}

// Time: O(a + b)
// Space O(n)

// Step 5: Optimize Our Code
// 1st hint: Utilize the original strings
// 2nd hint: Use the 2 pointer technique
// 3rd hint: Start from the end of the strings!

// Example:
// ---------
//  Using pointers going from right to left
//  S: "a b c # d" -> "abd"      |      T: "a b z z # # d" -> "abd"
//             p1                                       p2

// Step 6: Optimized Solution
function Strings1OptimizedSolution(s: string, t: string) {
  let p1, p2: number;

  p1 = s.length - 1;
  p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backcount = 2;

        while (backcount > 0) {
          p1--;
          backcount--;

          if (s[p1] === '#') {
            backcount = backcount + 2;
          }
        }
      }
      if (t[p2] === '#') {
        let backcount = 2;

        while (backcount > 0) {
          p2--;
          backcount--;

          if (t[p2] === '#') {
            backcount = backcount + 2;
          }
        }
      }
    } else {
      if (p1 < 0 || p2 < 0) return false;
      if (s[p1] !== t[p2]) return false;

      p1--;
      p2--;
    }
  }

  return true;
}

export { Strings1, Strings1BruteForce, Strings1OptimizedSolution };
