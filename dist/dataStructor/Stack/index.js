"use strict";
/**
 * @file Stack类实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.push = function (ele) {
        return this.stack.push(ele);
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.clear = function () {
        this.stack.length = 0;
    };
    Stack.prototype.print = function () {
        return this.stack;
    };
    return Stack;
}());
exports.Stack = Stack;
;
