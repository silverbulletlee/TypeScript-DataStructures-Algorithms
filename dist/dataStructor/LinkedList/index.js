"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 链表类实现
 * @author silverbulletlee
 */
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(val) {
        let listNode = new ListNode_1.ListNode(val);
        let cur = null;
        if (this.head === null) {
            this.head = listNode;
        }
        else {
            cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = listNode;
        }
        return ++this.length;
    }
    removeAt(pos) {
        if (this.head === null) {
            throw new Error('Uncaught ReferenceError: 链表为空,不能进行移除操作');
        }
        if (pos < 0 || this.length < pos) {
            throw new Error('Uncaught RangeError: 超出有效范围');
        }
        let index = 0;
        let cur = this.head;
        let pre = cur;
        if (pos === 0) {
            this.head = cur.next;
        }
        else {
            while (index++ < pos) {
                pre = cur;
                cur = cur.next;
            }
            pre.next = cur.next;
        }
        this.length--;
        return cur.val;
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    indexOf(val) {
        var cur = this.head;
        var index = 0;
        while (cur) {
            if (cur.val === val) {
                return index;
            }
            cur = cur.next;
            index++;
        }
        return -1;
    }
    remove(val) {
        return this.removeAt(this.indexOf(val));
    }
    getHead() {
        return this.head;
    }
    insert(pos, val) {
        if (pos < 0 || this.length < pos) {
            return false;
        }
        let listNode = new ListNode_1.ListNode(val);
        let index = 0;
        let cur = this.head;
        let pre = cur;
        if (pos === 0) {
            listNode.next = cur;
            this.head = listNode;
        }
        else {
            while (index++ < pos) {
                pre = cur;
                cur = cur.next;
            }
            pre.next = listNode;
            listNode.next = pre;
        }
        this.length++;
        return true;
    }
    toString() {
        let res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res.join(' -> ');
    }
}
exports.LinkedList = LinkedList;
