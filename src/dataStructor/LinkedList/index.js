"use strict";
exports.__esModule = true;
/**
 * @file 链表类实现
 * @author silverbulletlee
 */
var ListNode_1 = require("./ListNode");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._size = 0;
        this.head = null;
    }
    LinkedList.prototype.isEmpty = function () {
        return this._size === 0;
    };
    LinkedList.prototype.size = function () {
        return this._size;
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
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.append = function (val) {
        var listNode = new ListNode_1.ListNode(val);
        var cur = this.head;
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
    };
    LinkedList.prototype.removeAt = function (pos) {
        if (this.isEmpty() || pos < 0 || this.size() < pos) {
            return;
        }
        var res = null;
        if (pos === 0) {
            res = this.head;
            this.head = this.head.next;
        }
        else {
            var cur = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
        }
        this._size--;
        return res.val;
    };
    LinkedList.prototype.remove = function (val) {
        return this.removeAt(this.indexOf(val));
    };
    LinkedList.prototype.insert = function (pos, val) {
        if (pos < 0 || this.size() < pos) {
            return false;
        }
        if (pos === this.size()) {
            this.append(val);
            return true;
        }
        var listNode = new ListNode_1.ListNode(val);
        var cur = this.head;
        if (pos === 0) {
            listNode.next = cur;
            this.head = listNode;
        }
        else {
            while (--pos) {
                cur = cur.next;
            }
            var next = cur.next;
            cur.next = listNode;
            listNode.next = next;
        }
        this._size++;
        return true;
    };
    LinkedList.prototype.toString = function (separator) {
        if (separator === void 0) { separator = '->'; }
        var res = [];
        var cur = this.head;
        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }
        return res.join(separator);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
