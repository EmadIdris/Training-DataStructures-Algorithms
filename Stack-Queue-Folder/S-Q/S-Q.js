'use strict';

const Node = require('./node');

class Stack{ // create a stack class
    constructor(){
        this.top =null;  // set the initial top to null
    }
    push(value){
        let node = new Node(value); // create a new node with the value based in
        node.next = this.top; // set the node's nect to the current top
        this.top = node; // make it the new top
    }
    pop(){
        if(!this.top){ // if the stack empty 
            throw 'cannot remove from an empty stack';
        }
        let poppedValue = this.top; // store the thing at the top of the stack in a variable
        this.top = this.top.next ; // make it the new top
        return poppedValue.value; // return the popped value 
    }
    peek(){
        if(!this.top){
            throw 'stack is empty'
        }
        return this.top.value; // return the top value
    }
    isEmpty(){
        // return boolean if stack is empty
        return (!this.top) ? true : false;
    }
}
class Queue{ //create a queue class
    constructor(){
        this.front = null;
        this.back = null;
    }
    enqueue(value){
        let node = new Node(value);
        if(!this.front){ // queue is empty
            this.front = node; // set the queue front to the node
            this.back = node;   // set the queue back to the node 
            return;
        }else{
            this.back.next = node;
            this.back = node 
        }
    }
    dequeue(){ // remove from the front of the queue
        if(!this.front){
            throw 'queue is empty'
        }
        if(this.front === this.back){ // the queue well be empty after this is removed
            let dequeueVal = this.front;
            this.front = null;
            this.back = null;
            return dequeueVal.value;
        }else{
            let dequeueVal = this.front;
            this.front = this.front.next;
            return dequeueVal.value;
        }
    }
    peek(){
        if(!this.front){
            throw 'queue is empty';
        }else{
            return this.front.value;
        }
    }
    isEmpty(){
        return (!this.front) ?  true : false;
    }
}
module.exports={
    Stack,Queue
}