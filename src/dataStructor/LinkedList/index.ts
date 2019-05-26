/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { ListNode, listNodeType } from './ListNode';

export class LinkedList {
    private _size: number = 0;
    private head: listNodeType = null;

    isEmpty(): boolean {
        return this._size === 0;
    }
    size(): number {
        return this._size;
    }
    indexOf (val: any): number {
        var cur = this.head;
        var index = 0;

        while (cur) {
            if (cur.val === val) {
                return index;
            }

            cur = cur.next;
            index++;
        }
        return -1;
    }
    getHead(): listNodeType {
        return this.head;
    }
    append(val: any): number {
        let listNode: listNodeType = new ListNode(val);
        let cur: listNodeType = this.head;

        if (this.head === null) {
            this.head = listNode;
        } else {
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = listNode;
        }

        return ++this._size;
    }
    removeAt(pos: number): any {
        if (this.head === null) {
            return;
        }

        if (pos < 0 || this._size < pos) {
            return;
        }

        let res: listNodeType = null;

        if (pos === 0) {
            res = this.head;
            this.head = this.head.next;
        } else {
            let cur: listNodeType = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
        }   

        this._size--;

        return res.val;
    }
    remove(val: any): listNodeType {
        return this.removeAt(this.indexOf(val));
    }
    insert(pos: number, val: any): boolean {
        if (pos < 0 || this._size < pos) {
            return false;
        }

        if (pos === this._size) {
            this.append(val);
            return true;
        }

        let listNode: listNodeType = new ListNode(val);
        let cur: listNodeType = this.head;

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
    toString(): string {
        let res: any[] = [];
        let cur: listNodeType = this.head;

        while (cur) {
            res.push(cur.val);
            cur = cur.next;
        }

        return res.join(' -> ');
    }
}
