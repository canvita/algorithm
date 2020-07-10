class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = {};
    this.count = 0;
    this.head = new Node("head");
    this.tail = new Node("tail");
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.hashMap[key]) return -1;
    const node = this.hashMap[key];
    this.moveToTail(node);
    return node.value;
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.hashMap[key]) {
      const node = this.hashMap[key];
      node.value = value;
      this.moveToTail(node);
    } else {
      if (this.capacity === this.count) {
        // 移除hashmap
        delete this.hashMap[this.head.next.key];
        this.count--;
        // 移除头部
        this.removeNode(this.head.next);
      }
      const node = new Node(key, value);
      this.pushTail(node);
      this.hashMap[key] = node;
      this.count++;
    }
  }
  pushTail = (node) => {
    node.prev = this.tail.prev;
    node.prev.next = node;
    node.next = this.tail;
    this.tail.prev = node;
  };
  moveToTail = (node) => {
    this.removeNode(node);
    this.pushTail(node);
  };
  removeNode = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得关键字 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4
