/**
 * @file 链表类实现
 * @author silverbulletlee
 */
import { ListNode, listNodeType } from './ListNode';

export class LinkedList {
    private length: number = 0;
    private head: listNodeType = null;

    append(val: any): number {
        let listNode: listNodeType = new ListNode(val);
        let cur: listNodeType = null;

        if (this.head === null) {
            this.head = listNode;
        } else {
            cur = this.head;

            while (cur.next !== null) {
                cur = cur.next;
            }

            cur.next = listNode;
        }

        return ++this.length;
    }
    removeAt(pos: number): any {
        if (this.head === null) {
            throw new Error('Uncaught ReferenceError: 链表为空,不能进行移除操作');
        }

        if (pos < 0 || this.length < pos) {
            throw new Error('Uncaught RangeError: 超出有效范围');
        }

        let index: number = 0;
        let cur: listNodeType = this.head;
        let pre: listNodeType = cur;

        if (pos === 0) {
            this.head = cur.next;
        } else {

            while (index++ < pos) {
                pre = cur;
                cur = cur.next;
            }

            pre.next = cur.next;
        }   

        this.length--;

        return cur.val;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }
    size(): number {
        return this.length;
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
    remove(val: any): listNodeType {
        return this.removeAt(this.indexOf(val));
    }
    getHead(): listNodeType {
        return this.head;
    }
    insert(pos: number, val: any): boolean {
        if (pos < 0 || this.length < pos) {
            return false;
        }

        let listNode: listNodeType = new ListNode(val);
        let index: number = 0;
        let cur: listNodeType = this.head;
        let pre: listNodeType = cur;

        if (pos === 0) {
            listNode.next = cur;
            this.head = listNode;
        } else {
            while (index++ < pos) {
                pre = cur;
                cur = cur.next;
            }
            
            pre.next = listNode;
            listNode.next = pre;
            
        }

        this.length++;

        return true;
    }
    getElementAt(index: number) {
        if (index >= 0 && index <= this.length) {
          let node = this.head;
          for (let i = 0; i < index && node != null; i++) {
            node = node.next;
          }
          return node;
        }
        return undefined;
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
