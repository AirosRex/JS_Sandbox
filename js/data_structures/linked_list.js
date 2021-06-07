import Node from "./node.js"

export default class LinkedList {
   constructor() {
      this.head = null;

   }

   // Prints out the list to console.log
   printList() {
      // Print only values
      if (this.head == null) {
         return;
      }

      let cur = this.head;
      let list = cur.element;
      
      while (cur.next != null){
         list += ' ' + cur.next.element;
         cur = cur.next;
      }
      console.log(list);
   }

   // Gives the size of the list
   length() {
      let temp = this.head;
      let count = 0;
      while (temp != null) {
         count++;
         temp = temp.next;
      }
      return count;
   }

   // Return whether or not the list is empty
   isEmpty() {
      if (this.head) {
         return false;
      } return true;
   }

   // Adds an element to the end of the list
   add(element) {
      if (this.head == null) {
         this.head = new Node(element);
      } else {
         let cur = this.head;
         while (cur.next != null) {
            cur = cur.next;
         }
         cur.next = new Node(element);
      }
   }

   // Insert element at the specified location
   insertAt(element, index) {
      if (index < 0 || index > this.length()) {
         console.log('Outside of list');
         return ;
      }
      
      let temp = new Node(element);

      if (index == 0){
         temp.next = this.head;
         this.head = temp;
      } else {
         let cur = this.head;
         for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
         }
         temp.next = cur.next;
         cur.next = temp;
      }

   }

   // Removes an element from the specified location
   removeFrom(index) {

   }

   // Finds the index of element
   indexOf(element) {
   }
}