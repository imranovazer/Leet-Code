/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let track = [];
  let temp = head;
  let prev = head;

  if (head === null) return head;
  do {
    let isIn = track.indexOf(temp.val);
    if (isIn === -1) {
      track.push(temp.val);
      prev = temp;
    } else {
      prev.next = temp.next;
    }

    temp = temp.next;
  } while (temp !== null);
  return head;
};
