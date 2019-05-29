/**
 * @file 双向链表类实现
 * @author silverbulletlee
 */
import { DoublyListNode, doublyListNodeType } from './DoublyListNode';
import { LinkedList } from '../LinkedList';


export class DoublyLinkedList extends LinkedList{
    protected head: doublyListNodeType = null;
    protected tail: doublyListNodeType = null;

    getTail(): doublyListNodeType {
        return this.tail;
    }
    append(val: any): number {
        let listNode: doublyListNodeType = new DoublyListNode(val);

        if (this.isEmpty()) {
            this.head = listNode;
            this.tail = listNode;
        } else {
            this.tail.next = listNode;
            listNode.prev = this.tail;
            this.tail = listNode;
        }

        return ++this._size;
    }
    removeAt(pos: number): any {
        if (this.isEmpty() || pos < 0 || this.size() < pos) {
            return;
        }

        let res: doublyListNodeType = null;

        if (pos === 0) {
            res = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = this.head
            }

        } else if (pos === this.size() - 1) {
            res = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let cur: doublyListNodeType = this.head;
            while (--pos) {
                cur = cur.next;
            }
            res = cur.next;
            cur.next = cur.next.next;
            if (cur.next) {
                cur.next.prev = cur;
            }
        }

        this._size--;

        return res.val;
    }
    insert(pos: number, val: any): boolean {
        if (pos < 0 || this.size() < pos) {
            return false;
        }
        if (pos === this.size()) {
            this.append(val);
            return true;
        }
        let listNode: doublyListNodeType = new DoublyListNode(val);
        
        if (pos === 0) {
            listNode.next = this.head;
            this.head && (this.head.prev = listNode);
            this.head = listNode;
        } else {
            let cur: doublyListNodeType = this.head;
            while (--pos) {
                cur = cur.next;
            }
            let next = cur.next;
            cur.next = listNode;
            listNode.prev = cur;

            if (next) {
                listNode.next = next;
                next.prev = listNode;
            }
        }
        this._size++;

        return true;
    }
    toString(separator: string = '<=>'): string {
        return super.toString(separator);
    }
}
