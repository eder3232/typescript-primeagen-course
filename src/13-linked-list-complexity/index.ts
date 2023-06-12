interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}

interface LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    get length(): number;
    insertAt(value: T, index: number): void;
    removeAt(index: number): void;
    remove(value: T): void;
    append(value: T): void;
    prepend(value: T): void;
    get(index: number): LinkedListNode<T> | null;
}

