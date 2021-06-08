/** 
 * Given two numbers represented by two lists, write a function
 * that returns the sum list. The sum list is a list representation
 * of the addition of two input numbers.
 * 
 * Input: 
 * List1: 5->6->3 // represents number 365 
 * List2: 8->4->2 // represents number 248 
 *
 * Output: 
 * Resultant list: 3->1->6 // represents number 613 
 * Explanation: 365 + 248 = 613
 */

import LinkedList from "../data_structures/linked_list";

const addLinkedLists = (l1, l2) => {
   answer = new LinkedList();
   // Add beautiful code here
   return answer;
}

// Testing code:
let list1 = new LinkedList();
let List2 = new LinkedList();
list1.add(5).add(6).add(3);
list2.add(8).add(4).add(2);

addLinkedLists(list1, list2).printList();