/**
 * @file Queue 类实现
 * @author silverbulletlee
 */

export class Queue {
    private queue: any[] = [];
    dequeue(): any {
        if (this.isEmpty()) {
            return undefined;
        }
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
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    }
    clear(): void {
        this.queue.length = 0;
    }
    print(): string {
        return JSON.stringify(this.queue);
    }
};
