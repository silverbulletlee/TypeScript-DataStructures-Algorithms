"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file 链表类实现
 * @author silverbulletlee
 */
var ListNode_1 = require("./ListNode");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.append = function (val) {
        var listNode = new ListNode_1.ListNode(val);
        var cur = null;
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
    };
    LinkedList.prototype.removeAt = function (pos) {
        if (this.head === null) {
            throw new Error('Uncaught ReferenceError: 链表为空,不能进行移除操作');
        }
        if (pos < 0 || this.length < pos) {
            throw new Error('Uncaught RangeError: 超出有效范围');
        }
        var index = 0;
        var cur = this.head;
        var pre = cur;
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
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.indexOf = function (val) {
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
    };
    LinkedList.prototype.remove = function (val) {
        return this.removeAt(this.indexOf(val));
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.insert = function (pos, val) {
        if (pos < 0 || this.length < pos) {
            return false;
        }
        var listNode = new ListNode_1.ListNode(val);
        var index = 0;
        var cur = this.head;
        var pre = cur;
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
    };
    LinkedList.prototype.toString = function () {
        var res = [];
        var cur = this.head;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res.join(' -> ');
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
