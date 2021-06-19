import Node from "./node.js"

export default class LinkedList {
   constructor(values) {
      this.head = null;
      this.length = 0;
      
      if (Array.isArray(values)) {
         values.forEach(element => {
            this.add(element);
         });
      }
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
      return this;
   }

   // Insert element at the specified location
   insertAt(element, index) {
      if (index < 0 || index > this.getLength()) {
         console.log('Outside of list');
         return this;
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
      return this;
   }

   // Removes an element from the specified location
   removeFrom(index) {
      if (index < 0 || index >= this.length) {
         console.log('Index out of bounds');
         return this;
      }

      if (index == 0 && !this.isEmpty()) {
         this.head = this.head.next;
         return this;
      }

      let previous = this.head;
      let current = previous;
      for (let i = 0; i < index; i++) {
         previous = current;
         current = current.next;
      }
      previous.next = current.next;
      return this;
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

   // Do this in-place; Don't just create a new linked list and assign it to HEAD
   reverse() {

      if (this.head == null){
         return;
      }
      let storage = [];
      let advance = this.head;
      //Make array with all values
      while (advance.next != null) {
         storage.push(advance.element);
         advance = advance.next;
      }
      storage.push(advance.element);

      //Feed values back in backwards
      advance = this.head;
      for (let i = storage.length - 1; i >= 0; i--) {
         advance.element = storage[i];
         advance = advance.next;
      }

      return this;
   }

   reverse2() {

      let prev = null;
      let current = this.head;
      let next = null;
      while (current) {
         next = current.next;
         current.next = prev;
         prev = current;
         current = next;
      }

      this.head = prev;
      return this;
         

   }
   // Imagine someone did: ll.head.next.next.next = ll.head;
   // Return true or false.
   detectLoop() {
      if (this.head == null){
         return false;
      }

      let runner = this.head;
      let storage = [];
      while (runner != null) {
        for (let i = 0; i < storage.length; i++) {
           if (storage[i] == runner) {
              return true;
           }
        }
        storage.push(runner);
        runner = runner.next;
      }
      return false;

   }

   // Input: 17->15->8->12->10->5->4->1->7->6->NULL
   // Output: 8->12->10->4->6->17->15->5->1->7->NULL
   segregateOddsAndEvens() {

      if (this.head == null){
         return;
      }
      let evenStorage = [];
      let oddStorage = [];
      let otherStorage = [];
      let advance = this.head;
      //go through linked list up until last element
      while (advance != null) {
         if (advance.element == null || advance.element == NaN || advance.element == undefined) {
            otherStorage.push(advance.element);
         } else if (advance.element % 2 == 0) {
            evenStorage.push(advance.element);
         } else {
            oddStorage.push(advance.element);   
         }
         advance = advance.next;
      }

      advance = this.head;
      for (let i = 0; i < evenStorage.length; i++) {
         advance.element = evenStorage[i];
         advance = advance.next;
         console.log(i);
      }
      for (let i = 0; i < oddStorage.length; i++) {
         advance.element = oddStorage[i];
         advance = advance.next;
      }
      for (let i = 0; i < otherStorage.length; i++) {
         advance.element = otherStorage[i];
         advance = advance.next;
      }
      return this;
   }
}