interface Node<T> {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.tail) {
            //Este codigo me parece mas limpio
            // const newNode: Node<T> = { value: item };
            // this.tail.next = newNode;
            // this.tail = newNode;
            //Pero the primeagen lo hace asi
            this.tail = this.head = newNode
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        //free
        head.next = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
