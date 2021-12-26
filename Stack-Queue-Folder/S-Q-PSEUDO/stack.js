'use strict';

const Node = require('./node')

class Stack{
    constructor(){
        this.top =null;
        this.length = 0
    }
    push(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            console.log('initial new stack');
            this.top = newNode;
            this.length = this.length + 1
        }else{
            newNode.next = this.top
            this.top = newNode
            this.length = this.length +1
        }
        return this.top.value
    }
    pop(){
        if(this.isEmpty()){
            throw 'stack is empty'
            return false;
        } 
     let poppedVal = this.top
     this.top = this.top.next
     poppedVal.next - null
     this.length = this.length -1
     return poppedVal.value
    }
    peek(){
        if(!this.top){
            throw 'stack is empty'
        }else{
            return this.top.value
        }
    }
    isEmpty(){
        return this.top === null;
    }
}
module.exports=Stack;