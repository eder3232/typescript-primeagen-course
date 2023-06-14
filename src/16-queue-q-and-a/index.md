# Q & A

Si bien se podria usar length===1 para validar que la queue esta vacia, esto daria un error ya que typescript no sabria si el tial es o no un undefined.

``` javascript
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
```
