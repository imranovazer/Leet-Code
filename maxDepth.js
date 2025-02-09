/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let count = 0;

  let goDepp = (node) => {
    if (!node) {
      return;
    } else {
      ++count && goDepp(node.left) && goDepp(node.right);
    }
  };

  goDepp(root);

  return count;
};
