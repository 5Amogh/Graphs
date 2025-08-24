export default class Queue{
    constructor(){
        this.items = new Map();
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element){
        this.items.set(this.tail,element);
        this.tail++;
    }

    dequeue(){
        if(this.isEmpty()) return null;
        const itemToDequeue = this.items.get(this.head)
        this.items.delete(this.head);
        this.head++;
        return itemToDequeue;
    }

    isEmpty(){
        return this.head == this.tail;
    }

    size(){
        return this.tail - this.head;
    }

    printQueue(){
        console.log([...this.items.values()])
    }

    peek(){
        return this.items.get(this.head);
    }

}

// const q = new Queue();
// q.enqueue('A');
// q.enqueue('B');
// q.enqueue('C');
// q.printQueue(); // [ 'A', 'B', 'C' ]
// console.log(q.peek());

// console.log(q.dequeue()); // 'A'
// console.log(q.peek());
// console.log(q.dequeue()); // 'B'
// q.printQueue(); // [ 'C' ]

// console.log(q.size()); // 1
// console.log(q.isEmpty()); // false

// console.log(q.dequeue()); // 'C'
// console.log(q.isEmpty()); // true
