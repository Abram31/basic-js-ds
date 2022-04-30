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
// function removeKFromList(l, k) {
//   let current = l; //  
//   if (!current) { return; }

//   while (current.next) { //пока есть узлы ???? как это записать для прохода по всем листам???

//     if (current.value === k) {  //if текущий равен искомому
//       //переносим ссылку

//       current.value = current.next.value; // перезаписываем значание в листе
//       current.next = current.next.next //здесь перекидываем ссылку
//     }
//     current = current.next; // если не равен =>переходим к следующему


//   }

//   return l;
// }

function removeKFromList(l, k) {
  const list = l
  debugger
  // return list
  recursive(list)
  function recursive (obj) {
    for (key in obj) {
      if (obj[key] == k) {
        obj[key] = obj.next
        recursive(obj)
      } if (obj[key].next instanceof Object) {
        recursive(obj[key].next)
      }
      if (obj[key] == null ) {
        return list
      }
    }
  }
  
  return list

  // let newArr = [...list.value]
  // let result = []
  // newArr.forEach(item =>{
  //   if (item != k) {
  //     result.push(item)
  //   }
  // } 
  // )
    
  // return result
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
