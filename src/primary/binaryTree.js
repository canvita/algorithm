/**
 * Q: 二叉树有哪几种存储的数据结构? 什么样二叉树适合用数组来存储?
 * A:
 * 节点的 深度 = 层 - 1 = 树的高度 - 高度
 * 树的遍历: 中序, 前序, 后序
 * 非递归的遍历方法对应leetcode 94, 144,145,
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  let stack = [];
  function traversal(r) {
    if (!r) return;
    stack.push(r.val);
    traversal(r.left);
    traversal(r.right);
  }
  traversal(root);
  return stack;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let stack = [];
  function traversal(r) {
    if (!r) return;
    traversal(r.left);
    traversal(r.right);
    stack.push(r.val);
  }
  traversal(root);
  return stack;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = [];
  function traversal(r) {
    if (!r) return;
    traversal(r.left);
    stack.push(r.val);
    traversal(r.right);
  }
  traversal(root);
  return stack;
};

/** 生成小于5的链式完全二叉树
 * @param {number[]} nums
 * @returns {object}
 */
function genTree(nums) {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  let head = new TreeNode(nums[0]);
  let cur = head;
  for (let i = 1; i < nums.length; i++) {
    if (cur.left === null) {
      cur.left = new TreeNode(nums[i]);
    } else if (cur.right === null) {
      cur.right = new TreeNode(nums[i]);
    } else {
      cur = cur.left;
      cur.left = new TreeNode(nums[i]);
    }
  }
  return head;
}
const tree = genTree([1, 2, 3, 4, 5]);
console.log(inorderTraversal(tree));
