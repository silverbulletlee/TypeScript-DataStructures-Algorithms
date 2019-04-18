/**
 * @file Stack类实现
 * @author silverbulletlee
 */

export class Stack {
    private stack: any[];
    constructor() {
        this.stack = [];
    }
    pop(): any {
        return this.stack.pop();
    }
    push(ele: any): number {
        return this.stack.push(ele);
    }
    size(): number {
        return this.stack.length;
    }
    isEmpty(): boolean {
        return this.stack.length === 0;
    }
    peek(): any {
        return this.stack[this.stack.length - 1];
    }
    clear(): void {
        this.stack.length = 0;
    }
    print(): any[] {
        return this.stack;
    }
};
