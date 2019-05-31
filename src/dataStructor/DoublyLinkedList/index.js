"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * @file 双向链表类实现
 * @author silverbulletlee
 */
var DoublyListNode_1 = require("./DoublyListNode");
var LinkedList_1 = require("../LinkedList");
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.tail = null;
        return _this;
    }
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail;
    };
    DoublyLinkedList.prototype.append = function (val) {
        var listNode = new DoublyListNode_1.DoublyListNode(val);
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
    };
    DoublyLinkedList.prototype.removeAt = function (pos) {
        if (this.isEmpty() || pos < 0 || this.size() < pos) {
            return;
        }
        var res = null;
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
            var cur = this.head;
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
    };
    DoublyLinkedList.prototype.insert = function (pos, val) {
        if (pos < 0 || this.size() < pos) {
            return false;
        }
        if (pos === this.size()) {
            this.append(val);
            return true;
        }
        var listNode = new DoublyListNode_1.DoublyListNode(val);
        if (pos === 0) {
            listNode.next = this.head;
            this.head && (this.head.prev = listNode);
            this.head = listNode;
        }
        else {
            var cur = this.head;
            while (--pos) {
                cur = cur.next;
            }
            var next = cur.next;
            cur.next = listNode;
            listNode.prev = cur;
            if (next) {
                listNode.next = next;
                next.prev = listNode;
            }
        }
        this._size++;
        return true;
    };
    DoublyLinkedList.prototype.toString = function (separator) {
        if (separator === void 0) { separator = '<=>'; }
        return _super.prototype.toString.call(this, separator);
    };
    return DoublyLinkedList;
}(LinkedList_1.LinkedList));
exports.DoublyLinkedList = DoublyLinkedList;
