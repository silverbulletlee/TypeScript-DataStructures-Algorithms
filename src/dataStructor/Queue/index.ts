/**
 * @file Queue 类实现
 * @author silverbulletlee
 */

export class Queue<T> {
    private queue: T[] = [];
    dequeue(): T | void {
        if (this.isEmpty()) {
            return;
        }
        return this.queue.shift();
    }
    enqueue(ele: T): number {
        return this.queue.push(ele);
    }
    size(): number {
        return this.queue.length;
    }
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
    front(): T {
        if (this.isEmpty()) {
            return;
        }
        return this.queue[0];
    }
    clear(): void {
        this.queue.length = 0;
    }
    print(): string {
        return JSON.stringify(this.queue);
    }
}
