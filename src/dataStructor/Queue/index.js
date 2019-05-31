"use strict";
/**
 * @file Queue 类实现
 * @author silverbulletlee
 */
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue.shift();
    };
    Queue.prototype.enqueue = function (ele) {
        return this.queue.push(ele);
    };
    Queue.prototype.size = function () {
        return this.queue.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    Queue.prototype.front = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    };
    Queue.prototype.clear = function () {
        this.queue.length = 0;
    };
    Queue.prototype.print = function () {
        return JSON.stringify(this.queue);
    };
    return Queue;
}());
exports.Queue = Queue;
