export default class ArrayBasedQuestions {
  // ===========================================================================
  // MARK: Container With Most Water
  // Question #2 (Medium)
  // Q: You are given an array of positive integers where each integer represents the height of a vertical line
  //    on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest
  //    amount of water. Return the area of water it would hold.
  // --------------------------------------------------
  /*
  Step 1: Constraints 
    - does the thickness of the lines affect the area? assume they take no space 

    - do the left and right sides of the graph count as walls? no, the sides cannot be used to form a container. 

    - does a higher line inside our container affect our area? no lines inside a container don't affect our area. 

  Step 2: Write out some test cases
    [] => -1 
    [1] => -1
    [1, 2] => 1 * 1 = 1
    

      -----4-----    A = L * W = 7 * 4 = 28 
     v           v 
    [7, 1, 2, 3, 9]
    [9, 1, 2, 3, 7]

    Step 8: Can We Optimize Our Solution? 


*/
  static containerWithMostWaterBruteForce(heights: number[]): number {
    let maxArea = 0;
    for (let p1 = 0; p1 < heights.length; p1++) {
      // O(n)
      for (let p2 = p1 + 1; p2 < heights.length; p2++) {
        // O(n)
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
      }
    }
    return maxArea;
  }

  static containerWithMostWaterOptimal(heights: number[]): number {
    let p1, p2, maxArea;

    p1 = 0;
    p2 = heights.length - 1;
    maxArea = 0;

    while (p1 < p2) {
      // O(n)
      console.log({ p1, p2 });
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
      console.log({ maxArea });

      if (heights[p1] <= heights[p2]) p1++;
      else p2--;
    }
    return maxArea;
  }

  // Time: O(n^2)
  // Space: O(1)

  static containerWithMostWaterMySolution(array: number[]): number {
    if (array.length < 2) return 0;

    let firstMaxWall = {
      index: -1,
      value: -1,
    };

    let secondMaxWall = {
      index: -1,
      value: -1,
    };

    for (let i = 0; i < array.length; i++) {
      // O(n)
      if (array[i] > firstMaxWall.value) {
        firstMaxWall.index = i;
        firstMaxWall.value = array[i];
      }
    }

    for (let i = 0; i < array.length; i++) {
      // O(n)
      if (i !== firstMaxWall.index && array[i] > secondMaxWall.value) {
        secondMaxWall.index = i;
        secondMaxWall.value = array[i];
      }
    }

    console.log(firstMaxWall, secondMaxWall);

    let distance = Math.abs(firstMaxWall.index - secondMaxWall.index);

    // Return the Area = L x W
    return distance * secondMaxWall.value;
  }

  // Time: O(2n) -> O(n)
  // Space: O(1)

  // ===========================================================================

  static test() {
    let res = [];
    const array = [7, 1, 2, 3, 9];

    res.push(this.containerWithMostWaterMySolution(array));
    res.push(this.containerWithMostWaterBruteForce(array));
    res.push(this.containerWithMostWaterOptimal(array));

    return res;
  }
}
