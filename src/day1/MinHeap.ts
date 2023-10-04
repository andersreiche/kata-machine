export default class MinHeap {
    public length: number;
    private data: number[];
    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (!this.length) {
            return -1;
        }
        this.length--;

        const retVal = this.data[0];
        if (this.length === 0) {
            this.data = [];
            return retVal;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return retVal;
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        const parentId = this.parent(idx);
        const parentValue = this.data[parentId];

        if (this.data[idx] < parentValue) {
            this.data[parentId] = this.data[idx];
            this.data[idx] = parentValue;
            this.heapifyUp(parentId);
        }
    }

    private heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const leftChildId = this.leftChild(idx);
        const rightChildId = this.rightChild(idx);

        if (leftChildId >= this.length) {
            return;
        }

        const leftVal = this.data[leftChildId];
        const rightVal = this.data[rightChildId];
        const val = this.data[idx];

        if (leftVal > rightVal && val > rightVal) {
            this.data[idx] = rightVal;
            this.data[rightChildId] = val;
            this.heapifyDown(rightChildId);
        } else if (rightVal > leftVal && val > leftVal) {
            this.data[idx] = leftVal;
            this.data[leftChildId] = val;
            this.heapifyDown(leftChildId);
        }
    }
}
