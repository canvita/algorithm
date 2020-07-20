/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 递归
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root === null) return null;
  if (root.val === val) return root;
  if (val > root.val) return searchBST(root.right, val);
  if (val < root.val) return searchBST(root.left, val);
};
/** 循环
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) {
      return root;
    } else if (val > root.val) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return null;
};

/** 垃圾版本
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let originRoot = root;
  while (root) {
    if (val > root.val) {
      if (root.right === null) {
        root.right = new TreeNode(val);
        return originRoot;
      } else {
        root = root.right;
      }
    } else {
      if (root.val > val) {
        if (root.left === null) {
          root.left = new TreeNode(val);
          return originRoot;
        } else {
          root = root.left;
        }
      }
    }
  }
  root = new TreeNode(val);
  return root;
};

/** 简洁版本
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let test = new TreeNode(4);
test.left = new TreeNode(2);
test.right = new TreeNode(7);
test.left.left = new TreeNode(1);
test.left.right = new TreeNode(3);

console.log(insertIntoBST(test, 6));
