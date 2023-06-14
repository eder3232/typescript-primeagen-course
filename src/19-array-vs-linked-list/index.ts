interface BNode<T> {
    value: T;
    next?: BNode<T>;
    prev?: BNode<T>;
}

class DoubleLinkedList<T>{
    public length: number;
    private head?: BNode<T>;
    constructor() {
        this.length = 0
    }
    get(idx: number): T | undefined {
        let curr = this.head
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next
        }
        return curr?.value
    }
}