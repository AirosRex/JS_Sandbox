import LinkedList from "../data_structures/linked_list.js"

// Creating an object for the LinkedList class
var ll = new LinkedList();
console.log(ll);

// Testing isEmpty on an empty list;
// Returns true
console.log("Is List Empty ? " + ll.isEmpty());

// Adding an element to the list
ll.add(10);

// Prints 10
ll.printList();

// Returns 1
console.log(ll.getLength());

// Adding more elements to the list
ll.add(20)
  .add(30)
  .add(40)
  .add(50);

console.log(ll.isEmpty());

// Returns 10 20 30 40 50
ll.printList();

ll.insertAt('hi', 1);
ll.printList();
console.log(ll.indexOf(30));

// Prints 10 20 30 40
ll.printList();

// Returns 3
console.log("Index of 40 " + ll.indexOf(40));

// Insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// Returns false
console.log("Is List Empty ? " + ll.isEmpty());

// Remove 3rd element from the list
ll.removeFrom(1);

// Prints 10 20 60 40
ll.printList();

console.log(ll.add(11));
ll.add(23).add(3).add(4).printList();

console.log(ll.detectLoop());

ll.segregateOddsAndEvens();
ll.printList()

ll.reverse2();
ll.printList();
