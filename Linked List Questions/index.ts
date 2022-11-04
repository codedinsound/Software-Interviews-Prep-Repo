class ListNode {
  value: any;
  next: ListNode;

  constructor(value: any) {
    this.value = value;
  }
}

// Q: Given a linked list, return it in reverse.

// Original
// 1 -> 2 -> 3 -> 4 -> 5 -> null

// Reversed
// 5 -> 4 -> 3 -> 2 -> 1 -> null

// Step 1: Verify the Constraints
// What do we return if we get null or single node? just return null

// Step 2: Write Out Test Cases

// Look up Original and Reversed test case up above
// What if we get a single argument
// 3 -> null
// 3 -> null
// or
// null
// null

function reverseLinkedList(head: ListNode): ListNode {
  let prevNode: ListNode = undefined;
  let currentNode: ListNode = head;

  while (currentNode) {
    console.log(currentNode.value);

    let next: ListNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = next;
  }

  console.log(prevNode);

  return prevNode; 
}

/**
 * What is happening how doe it work
 * Original: 0 -> 1 -> 2 -> 3 -> null
 * 
 * curr = 0 
 * next = 1  
 * curr.next = null  
 * prevNode = 0 
 * currentNode = 1  
 * 
 * curr = 1 
 * next = 2 
 * curr.next = 0
 * 
 * 
 * 
 * 
 * 
 * 
 */ 

export { ListNode, reverseLinkedList };
