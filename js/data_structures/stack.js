import Node from "./node.js"

/**
 * Implementation of Stack using a LinkedList
 */
export default class Stack {
   constructor() {
      this.head = null;
      this.length = 0;
   }

   getLength() {
      
   }

   isEmpty() {
   }

   push(element) {
      if (this.head == null) {
         this.head = new Node(element);
      } else {
         let cur = this.head;
         while (cur.next != null) {
            cur = cur.next;
         }
         cur.next = new Node(element);
      }
      this.length++;
      return this;
   }

   pop() {
      let cur = this.head;
      let prev = null;
      

   }

   // Returns the top element of the stack without removing it
   peek() {
   }
}