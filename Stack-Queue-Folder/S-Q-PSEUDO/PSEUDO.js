'use strict'

const Stack = require('./stack')

class Pcode{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.length = 0
    }
    // [10]->[15]->[20] 	5	[5]->[10]->[15]->[20]
    enqueue(value){
        if(this.stack2.length>0){
          let iterations = this.stack2.length;
          for(let i=0; i<iterations; i++){
            this.stack1.push(this.stack2.pop());
          }
        }
        this.length = this.stack1.length + 1;
        this.stack1.push(value);
      }
    
      dequeue(){
        let iterations = this.stack1.length;
        for(let i=0; i<iterations; i++){
          this.stack2.push(this.stack1.pop());
        }
        this.length = this.stack2.length - 1;
        return this.stack2.pop();
      }
    }
module.exports = Pcode;