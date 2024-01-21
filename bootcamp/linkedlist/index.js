// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      counter++;
    }

    return counter;
    // function getSum(el, sum = 0) {
    //   if (!el?.data) return sum;
    //   return getSum(el.next, sum + 1);
    // }

    // return getSum(this.head);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }
}

const list = new LinkedList();
list.insertFirst(new Node(1))
list.insertFirst(new Node(2))
list.insertFirst(new Node(3))
console.log(list.getLast());

module.exports = { Node, LinkedList };
