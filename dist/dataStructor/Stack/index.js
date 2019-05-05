"use strict";
/**
 * @file Stack类实现
 * @author silverbulletlee
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.stack = [];
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack.pop();
    }
    push(ele) {
        return this.stack.push(ele);
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.stack[this.stack.length - 1];
    }
    clear() {
        this.stack.length = 0;
    }
    print() {
        return JSON.stringify(this.stack);
    }
}
exports.Stack = Stack;
;
