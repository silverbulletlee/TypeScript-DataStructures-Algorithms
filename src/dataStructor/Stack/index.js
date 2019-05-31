"use strict";
/**
 * @file Stack类实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
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
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.clear = function () {
        this.stack.length = 0;
    };
    Stack.prototype.print = function () {
        return JSON.stringify(this.stack);
    };
    return Stack;
}());
exports.Stack = Stack;
