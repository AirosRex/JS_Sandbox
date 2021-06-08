import Node from "./node.js"

export default class LinkedList {
   constructor() {
      this.head = null;
      this.length = 0;
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
   getLength() {
      return this.length;
   }

   // Return whether or not the list is empty
   isEmpty() {
      return this.head == null;
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
      this.length++;
   }

   // Insert element at the specified location
   insertAt(element, index) {
      if (index < 0 || index > this.getLength()) {
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
      this.length++;
   }

   // Removes an element from the specified location
   removeFrom(index) {
      if (index < 0 || index >= this.length) {
         console.log('Index out of bounds');
         return;
      }

      if (index == 0 && !this.isEmpty()) {
         this.head = this.head.next;
         return;
      }

      let previous = this.head;
      let current = previous;
      for (let i = 0; i < index; i++) {
         previous = current;
         current = current.next;
      }
      previous.next = current.next;
   }

   // Finds the index of the first instance of element
   indexOf(element) {
      let current = this.head;
      let count = 0;

      for (let i = 0; i < this.length; i++) {
         if (element == current.element) {
            return count;
         }

         current = current.next;
         count++;
      } 
      
      return 'Not in list';
   }
}