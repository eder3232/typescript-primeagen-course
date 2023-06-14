interface SNode<T> {
    value: T;
    prev?: SNode<T>;
}

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return
        }
        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head
            this.head = undefined;
            return head?.value;
        }
        const head = this.head as SNode<T>
        this.head = head.prev
        //free
        head.prev = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

const newStack = new Stack<number>();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());

console.log(newStack.peek());
