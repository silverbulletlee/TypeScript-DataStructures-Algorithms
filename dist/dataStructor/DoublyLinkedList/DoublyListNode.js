"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */

const ListNode_1 = require("../LinkedList/ListNode");

class DoublyListNode extends ListNode_1.ListNode {
  constructor(val) {
    super(val);
    this.prev = null;
    this.next = null;
  }

}

exports.DoublyListNode = DoublyListNode;