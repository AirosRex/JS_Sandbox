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
import Node from "../data_structures/node.js";


const addLinkedLists2 = (l1, l2) => {
   let carry = 0;
   let n1 = l1.head;
   let n2 = l2.head;
   let answer = new LinkedList();

   while (n1 || n2 || carry) {
      let sum = carry;
      if (n1) {
         sum += n1.element;
         n1 = n1.next;
      }
      if (n2) {
         sum += n2.element;
         n2 = n2.next;
      }

      answer.add(sum % 10);
      carry = Math.floor(sum / 10);
   }

   return result;
}

const addLinkedLists = (l1, l2) => {
   let answer = new LinkedList();
   // Add beautiful code here
   
   //Setup Variables I'll need soon
   let rollover = 0;
   let n1 = l1.head;
   let n2 = l2.head;

   let biggerLength = Math.max(l1.length, l2.length);

   for (let i = 0; i < biggerLength; i++) {
      //Add all current elements
      
      if (n1 == null) {
         n1 = new Node(0);
      }

      if (n2 == null) {
         n2 = new Node(0);
      }

      let sum = rollover + n1.element + n2.element;      
      //Determine rollover
      if (sum >= 10) {
         sum -= 10;
         rollover = 1;
      } else {
         rollover = 0;
      }

      answer.add(sum);

      //Load up L1 or set to 0
      if (n1.next == null) {
         n1.element = 0;
      } else {
         n1 = n1.next;
      }

      //Load up L2 or set it to 0
      if (n2.next == null) {
         n2.element = 0;
      } else {
         n2 = n2.next;
      }
   }

   if (rollover == 1) {
      answer.add(1);
   }

   return answer;
}

// Testing code:
let list1 = new LinkedList();
let list2 = new LinkedList();

// list1.add(5).add(6).add(3);
list2.add(8).add(4).add(2);
// list2.add(8).add(4).add(9);

addLinkedLists2(list1, list2).printList();