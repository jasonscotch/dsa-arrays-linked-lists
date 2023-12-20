/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    let removed;
    if (this.length === 1) {
      removed = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      removed = this.tail.val;
      current.next = null;
      this.tail = current;
    }
    this.length--;
    return removed;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    const removed = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index out of bounds.');
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index out of bounds.');
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index out of bounds.');
    }
    const newNode = new Node(val);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;

      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;

      if (idx === this.length) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index out of bounds.');
    }
    let removed;

    if (idx === 0) {
      removed = this.head.val;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      removed = current.next.val;
      current.next = current.next.next;

      if (idx === this.length - 1) {
        this.tail = current;
      }
    }
    this.length--;
    return removed;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0;
    }
    let sum = 0;
    let currentNode = this.head;
    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
