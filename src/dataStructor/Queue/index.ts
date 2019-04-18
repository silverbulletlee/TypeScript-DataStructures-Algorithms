/**
 * @file Queue 类实现
 * @author silverbulletlee
 */

export class Queue {
    private queue: any[];
    constructor() {
        this.queue = [];
    }
    dequeue(): any {
        return this.queue.shift();
    }
    enqueue(ele: any): number {
        return this.queue.push(ele);
    }
    size(): number {
        return this.queue.length;
    }
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
    front(): any {
        return this.queue[0];
    }
    clear(): void {
        this.queue.length = 0;
    }
    print(): any[] {
        return this.queue;
    }
};
