import Node from "./node.js"

/**
 * Implementation of Queue using a LinkedList
 */
export default class Queue {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   getLength() {
      return this.length;
   }

   isEmpty() {
   }

   enqueue(element) {
   }

   dequeue() {
   }

   // Returns the top element of the queue without removing it
   peek() {
      return this.head;
   }
}