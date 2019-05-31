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
 * @file 双向链表节点类实现
 * @author silverbulletlee
 */
var ListNode_1 = require("../LinkedList/ListNode");
var DoublyListNode = /** @class */ (function (_super) {
    __extends(DoublyListNode, _super);
    function DoublyListNode(val) {
        var _this = _super.call(this, val) || this;
        _this.prev = null;
        _this.next = null;
        return _this;
    }
    return DoublyListNode;
}(ListNode_1.ListNode));
exports.DoublyListNode = DoublyListNode;
