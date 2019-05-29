"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 双向链表类实现
 * @author silverbulletlee
 */
const DoublyListNode_1 = require("./DoublyListNode");
const LinkedList_1 = require("../LinkedList");
class DoublyLinkedList extends LinkedList_1.LinkedList {
    constructor() {
        super(...arguments);
        this.head = null;
        this.tail = null;
    }
    getTail() {
        return this.tail;
    }
    append(val) {
        let listNode = new DoublyListNode_1.DoublyListNode(val);
        if (this.isEmpty()) {
            this.head = listNode;
            this.tail = listNode;
        }
        else {
            this.tail.next = listNode;
            listNode.prev = this.tail;
            this.tail = listNode;
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
            if (this.head) {
                this.head.prev = null;
            }
            else {
                this.tail = this.head;
            }
        }
        else if (pos === this.size() - 1) {
            res = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else {
            let cur = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
            if (cur.next) {
                cur.next.prev = cur;
            }
        }
        this._size--;
        return res.val;
    }
    insert(pos, val) {
        if (pos < 0 || this.size() < pos) {
            return false;
        }
        if (pos === this.size()) {
            this.append(val);
            return true;
        }
        let listNode = new DoublyListNode_1.DoublyListNode(val);
        if (pos === 0) {
            listNode.next = this.head;
            this.head && (this.head.prev = listNode);
            this.head = listNode;
        }
        else {
            let cur = this.head;
            while (--pos) {
                cur = cur.next;
            }
            let next = cur.next;
            cur.next = listNode;
            listNode.prev = cur;
            if (next) {
                listNode.next = next;
                next.prev = listNode;
            }
        }
        this._size++;
        return true;
    }
    toString(separator = '<=>') {
        return super.toString(separator);
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
