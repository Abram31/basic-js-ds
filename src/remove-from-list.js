const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  const list = l
  debugger
  recursive(list)
  function recursive(obj) {
    if (obj.next?.value == k && obj.next?.next == null) {
      obj.next = null
    } else if (obj.value == k && obj.next.next != null) {
      obj.value = obj.next.value
      obj.next = obj.next.next
      recursive(obj)
    } else if (obj.next != null && obj.next instanceof Object) {
      recursive(obj.next)
    }
  }
   return list

 
}


// ----------------------------for debugger -------------------------------------------
// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }
// const l = new ListNode(1)

// l.next = new ListNode(2)

// l.next.next = new ListNode(3)

// l.next.next.next = new ListNode(3)

// l.next.next.next.next = new ListNode(4)

// l.next.next.next.next.next = new ListNode(5)




module.exports = {
  removeKFromList
};
