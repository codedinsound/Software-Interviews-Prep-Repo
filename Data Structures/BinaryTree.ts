/*
          Perfect Binary Tree 
                   1
                  / \
                2     3
              /  \   / \
            4     5 6   7
        
          Full Binary Tree 

                  1
                 / \
                2   3
               / \  
              4   5
                 / \
                6   7
      Methods
      -------
      lookup: O(log N) 
      
      insert: O(log N)

      delete: O(log N) 

      Level 0: 2^0 = 1; 
      Level 1: 2^1 = 2; 
      Level 2: 2^2 = 4; 
      Level 3: 2^3 = 8; 

      # of nodes = 2^n - 1; 
      log nodes = height 

      log 100 = 2

      10^2 = 100 

      Balance vs Unbalanced Trees can cause run time to drop to O(n) 


      https://visualgo.net/en

*/

class BinaryTreeNode<T> {
  private value: T;
  private left: BinaryTreeNode<T>;
  private right: BinaryTreeNode<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
