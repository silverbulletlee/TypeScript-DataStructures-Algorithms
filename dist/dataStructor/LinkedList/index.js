"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 链表类实现
 * @author silverbulletlee
 */
const ListNode_1 = require("./ListNode");
class LinkedList {
    constructor() {
        this._size = 0;
        this.head = null;
    }
    isEmpty() {
        return this._size === 0;
    }
    size() {
        return this._size;
    }
    indexOf(val) {
        let cur = this.head;
        let index = 0;
        while (cur) {
            if (cur.val === val) {
                return index;
            }
            cur = cur.next;
            index++;
        }
        return -1;
    }
    getHead() {
        return this.head;
    }
    append(val) {
        let listNode = new ListNode_1.ListNode(val);
        let cur = this.head;
        if (this.isEmpty()) {
            this.head = listNode;
        }
        else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = listNode;
        }
        return ++this._size;
    }
    removeAt(pos) {
        if (this.isEmpty() || pos < 0 || this.size() < pos) {
            return;
        }
        let res = null;
        if (pos === 0) {
            res = this.head;
            this.head = this.head.next;
        }
        else {
            let cur = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
        }
        this._size--;
        return res.val;
    }
    remove(val) {
        return this.removeAt(this.indexOf(val));
    }
    insert(pos, val) {
        if (pos < 0 || this.size() < pos) {
            return false;
        }
        if (pos === this.size()) {
            this.append(val);
            return true;
        }
        let listNode = new ListNode_1.ListNode(val);
        let cur = this.head;
        if (pos === 0) {
            listNode.next = cur;
            this.head = listNode;
        }
        else {
            while (--pos) {
                cur = cur.next;
            }
            let next = cur.next;
            cur.next = listNode;
            listNode.next = next;
        }
        this._size++;
        return true;
    }
    toString(separator = '->') {
        let res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res.join(separator);
    }
}
exports.LinkedList = LinkedList;
