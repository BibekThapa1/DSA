class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
            this.length ++
            return newNode;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length ++;
    }

    dequeue(){
        if(this.length === 0) return undefined;
        let temp = this.first;

        if(this.length === 1){
            this.first = null;
            this.last = null;
            this.length --;
            return temp;
        }

        this.first = this.first.next;
        temp.next = null;
        this.length --;
        return temp;
    }

    min(){
        if (this.length ===0){
            return undefined;
        }
        let current = this.first
        let minValue = this.first.value

        while(current.next){
            current = current.next;
            if(current.value < minValue) {
                minValue = current.value;
            }
        }
        return minValue
    }

}

const queue = new Queue(1);
queue.enqueue(2)
queue.enqueue(3)
console.log(queue);
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(2)
queue.enqueue(1)
queue.enqueue(4)
console.log(queue);
console.log(queue.min())