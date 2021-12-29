'use strict';

const Node = require('../S-Q/node')

class Animal{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length =0
    }
    enqueue(animalObj){
        if(animalObj.type.toLowerCase() !== 'cat' && animalObj.type.toLowerCase() !== 'dog'){
            return 'cats and dogs only';
          }
          let newAnimal = new Node(animalObj);
          if(!this.length){
              this.front = newAnimal;
              this.rear = newAnimal;
              this.length = this.length +1
          }else{
              this.rear.next = newAnimal
              this.rear = newAnimal;
              this.length = this.length +1
          }
          return this.rear.value;
    }
    dequeue(pref){
        if(pref.toLowerCase() !== 'cat' && pref.toLowerCase() !== 'dog'){
            return null
        }
        if(this.length <2){
            return false
        }
        if(this.front.value.type === pref){
            let temp = this.front
            this.front = this.front.next
            temp.next  = null
            this.length = this.length -1
            return temp
        }
        let currentNode = this.front;
        while(currentNode.next.value.type !== pref){
          currentNode = currentNode.next;
          if(!currentNode.next){
            return null;
          }
        }
        let temp = currentNode.next;
        currentNode.next = temp.next;
        temp.next = null;
        this.length = this.length - 1;
        if(this.length === 1){
          this.rear = null;
        }
        return temp;
    }
}