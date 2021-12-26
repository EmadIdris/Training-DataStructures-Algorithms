'use strict';
const Node = require('./node')

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0
    }
    enqueue(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
            this.length = this.length +1
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
            this.length = this.length +1
        }
        return this.rear.value;
    }
    dequeue(){
        if (this.isEmpty()){
            // throw 'queue is empty';
            return false;
        }
        let temp = this.front;
        this.front = this.front.next;
        temp.next =  null
        this.length =this.length -1
        if(!this.length){
            return 'empty queue'
        }
        return this.front.value

    }
    peek(){
        if(this.isEmpty()){
            return false;
        }
        return this.front.value;
    }
    isEmpty(){
        return this.length === 0
    }
}
module.exports = Queue;