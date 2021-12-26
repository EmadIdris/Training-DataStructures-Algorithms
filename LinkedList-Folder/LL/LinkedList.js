'use strict';
//------------------------------------------------
const Node = require('./Node')
//------------------------------------------------
class LinkedList{
    constructor(){
        this.head = null;
    }
//------------------------------------------------
    insert(value){
        const newNode = new Node(value);
        if(!this.head){ // if not null 
            // there is a head 
            this.head = newNode;
            return this
        }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this.head;
    }
//------------------------------------------------
    include(value){
        if(!this.head){ // if != Null
            return false
        } 
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.value === value){
                return true
            }
            currentNode = currentNode.next;
        }
        return false;
    }
//------------------------------------------------
    toString(){
        if(this.head){ // if this.head === value
            return 'empty linked list'
        }
        let finalString = '';
        let currentNode = this.head;
        while(currentNode.next){
            finalString = finalString + `{ ${currentNode.value} } -> `;
            currentNode = currentNode.next;
        }
        return finalString + 'NULL';
    }
}
//---------------------------------------------------------------------------------------[    ][]
//---------------------------------------------------------------------------------------[    ][]
module.exports= LinkedList;