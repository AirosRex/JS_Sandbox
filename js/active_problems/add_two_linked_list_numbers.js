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

import LinkedList from "../data_structures/linked_list.js";

const addLinkedLists = (l1, l2) => {
   let answer = new LinkedList();
   // Add beautiful code here
   answer.head = new Node(0);
   
   //Setup Variables I'll need soon
   let rollover = 0;
   let currentL1 = l1.head;
   let currentL2 = l2.head;
   let currentAns = answer.head;


   let biggerLength = 0;
   if (l1.length > l2.length) {
      biggerLength = l1.length;
   } else {
      biggerLength = l2.length;
   }
      

   for (let i = 0; i <biggerLength; i++) {
      //Add all current elements
      currentAns.element = currentL1.element + currentL2.element + rollover;
      
      //Load up L1 or set to 0
      if (currentL1.next == null) {
         currentL1.element = 0;
      } else {
         currentL1 = currentL1.next;
      }

      //Load up L2 or set it to 0
      if (currentL2.next == null) {
         currentL2.element = 0;
      } else {
         currentL2 = currentl2.next;
      }

      //Determine rollover
      if (currentAns.element >= 10) {
         currentAns.element -= 10;
         rollover = 1;
      } else {
      rollover = 0;
      }

      //Prepare next node
      //Question: Can I do this as one line?
      currentAns.next = new Node(0); 
      currentAns = currentAns.next;
   }
   return answer;
}

// Testing code:
let list1 = new LinkedList();
let list2 = new LinkedList();
list1.add(5).add(6).add(3);
list2.add(8).add(4).add(2);

addLinkedLists(list1, list2).printList();