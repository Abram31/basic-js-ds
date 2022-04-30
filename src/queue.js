const { NotImplementedError } = require('../extensions/index.js');
// import { ListNode } from '../extensions/list-node.js';
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
  data = {

  };
  getUnderlyingList() {
    return this.data

  }

  enqueue(value) {
    debugger
    if (Object.keys(this.data) != 0) {
      recursive(this.data)
      function recursive(obj) {
        if (obj.next instanceof Object) {
          recursive(obj.next)
        } else {
          obj.next = new ListNode(value)

        }
        // for (let key in obj) {
        //   if (obj.next instanceof Object) {
        //     recursive(obj.next)
        //   } else {
        //     obj.next = new ListNode(value)
        //     break
        //   }
        // }
      }
    }
    else { this.data = new ListNode(value) }
  }

  dequeue() {
    debugger

        if (this.data.next instanceof Object) {
          let num = this.data.value
          this.data.value = this.data.next.value
          this.data.next = this.data.next.next
          return num
        } 

  }

}

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }


// const que = new Queue()
// que.enqueue(7);
// que.enqueue(9);
// que.enqueue(11);





module.exports = {
  Queue
};
