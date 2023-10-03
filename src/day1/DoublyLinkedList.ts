type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const newHead = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = newHead;
            return;
        }

        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
        }
        this.length++;

        const curr = this.getAt(idx) as Node<T>;

        const node = { value: item } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        // Assert that curr.prev exists
        if (node.prev) {
            node.prev.next = curr;
        }
    }

    append(item: T): void {
        this.length++;
        const newTail = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = newTail;
            return;
        }

        newTail.prev = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;
        return;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (item === curr.value) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            const retVal = this.head?.value;
            this.head = this.tail = undefined;
            return retVal;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        return node.value;
    }
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }
}
