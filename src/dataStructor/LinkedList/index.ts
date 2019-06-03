/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { ListNode, listNodeType } from './ListNode';

export class LinkedList<T> {
    protected _size: number = 0;
    protected head: listNodeType<T> = null;

    isEmpty(): boolean {
        return this._size === 0;
    }
    size(): number {
        return this._size;
    }
    indexOf(val: T): number {
        let cur = this.head;
        let index = 0;

        while (cur) {
            if (cur.val === val) {
                return index;
            }

            cur = cur.next;
            index++;
        }
        return -1;
    }
    getHead(): listNodeType<T> {
        return this.head;
    }
    append(val: T): number {
        let listNode: listNodeType<T> = new ListNode(val);
        let cur: listNodeType<T> = this.head;

        if (this.isEmpty()) {
            this.head = listNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = listNode;
        }

        return ++this._size;
    }
    removeAt(pos: number): T | void {
        if (this.isEmpty() || pos < 0 || this.size() < pos) {
            return;
        }

        let res: listNodeType<T> = null;

        if (pos === 0) {
            res = this.head;
            this.head = this.head.next;
        } else {
            let cur: listNodeType<T> = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
        }

        this._size--;

        return res.val;
    }
    remove(val: T): T | void {
        return this.removeAt(this.indexOf(val));
    }
    insert(pos: number, val: T): boolean {
        if (pos < 0 || this.size() < pos) {
            return false;
        }

        if (pos === this.size()) {
            this.append(val);
            return true;
        }

        let listNode: listNodeType<T> = new ListNode(val);
        let cur: listNodeType<T> = this.head;

        if (pos === 0) {
            listNode.next = cur;
            this.head = listNode;
        } else {
            while (--pos) {
                cur = cur.next;
            }
            let next = cur.next;
            cur.next = listNode;
            listNode.next = next;
        }

        this._size++;

        return true;
    }
    toString(separator: string = '->'): string {
        let res: any[] = [];
        let cur: listNodeType<T> = this.head;

        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }

        return res.join(separator);
    }
}
