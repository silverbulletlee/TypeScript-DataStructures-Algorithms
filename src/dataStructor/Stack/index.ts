/**
 * @file Stack类实现
 * @author silverbulletlee
 */

export class Stack<T> {
    private stack: T[] = [];
    size(): number {
        return this.stack.length;
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
    peek(): T {
        if (this.isEmpty()) {
            return;
        }
        return this.stack[this.size() - 1];
    }
    push(ele: T): number {
        return this.stack.push(ele);
    }
    pop(): T {
        if (this.isEmpty()) {
            return;
        }
        return this.stack.pop();
    }
    clear(): void {
        this.stack.length = 0;
    }
    print(): string {
        return JSON.stringify(this.stack);
    }
}
